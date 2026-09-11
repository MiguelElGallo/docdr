import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { once } from 'node:events';
const root=path.dirname(fileURLToPath(import.meta.url));
const require=createRequire(process.env.DOCDR_RENDER_DEPS || path.join(root,'package.json'));
const {default:puppeteer}=await import(require.resolve('puppeteer-core'));
const ffmpeg=require('ffmpeg-static');
const chrome=[process.env.CHROME_PATH,'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome','/usr/bin/google-chrome','/usr/bin/chromium'].find(p=>p&&existsSync(p));
if(!chrome)throw new Error('Set CHROME_PATH to Chrome or Chromium.');
const out=path.join(root,'output');await mkdir(out,{recursive:true});
const browser=await puppeteer.launch({executablePath:chrome,headless:true,args:['--hide-scrollbars','--disable-gpu']});
const fps=25,duration=28;
let encoder;
try{
 const page=await browser.newPage();await page.setViewport({width:1080,height:1350,deviceScaleFactor:1});
 await page.goto(pathToFileURL(path.join(root,'video.html')).href,{waitUntil:'networkidle0'});
 await page.evaluate(()=>document.fonts.ready);
 const frames=[2,6,9.5,15,20,25.5];const layout=[];
 for(let i=0;i<frames.length;i++){
  await page.evaluate(t=>window.renderVideoAt(t*1000),frames[i]);
  await page.screenshot({path:path.join(out,`scene-${i+1}.png`)});
  layout.push(await page.evaluate(()=>{const scene=[...document.querySelectorAll('.scene')].find(n=>n.style.visibility==='visible');return [...scene.querySelectorAll('.body h1,.body h2,.body p,.paper,.card,.row,.cta,.logo')].map(n=>{const b=n.getBoundingClientRect();return {text:(n.innerText||n.alt||'').slice(0,90),x:b.x,y:b.y,right:b.right,bottom:b.bottom,scroll:n.scrollWidth,width:n.clientWidth}})}));
 }
 await page.evaluate(()=>window.showThumbnail());await page.screenshot({path:path.join(out,'docdr-linkedin-thumbnail.png')});
 await writeFile(path.join(out,'layout-check.json'),JSON.stringify(layout,null,2));
 if(process.argv.includes('--preview')){console.log('Preview frames and thumbnail ready.');}
 else {
  const video=path.join(out,'docdr-linkedin-1080x1350.mp4');
  encoder=spawn(ffmpeg,['-y','-f','image2pipe','-framerate',String(fps),'-vcodec','png','-i','pipe:0','-c:v','libx264','-preset','slow','-b:v','2M','-minrate','2M','-maxrate','2M','-bufsize','4M','-x264-params','nal-hrd=cbr:filler=1','-vf','setsar=1','-pix_fmt','yuv420p','-r',String(fps),'-movflags','+faststart','-color_primaries','bt709','-color_trc','bt709','-colorspace','bt709','-an',video],{stdio:['pipe','ignore','pipe']});
  let log='';encoder.stderr.on('data',b=>{log=(log+b).slice(-6000)});
  const finished=new Promise((resolve,reject)=>{encoder.once('error',reject);encoder.once('close',code=>code===0?resolve():reject(new Error(log)))});
  // Observe early encoder failure even while frames are still being captured.
  let encodingError;finished.catch(e=>{encodingError=e});
  encoder.stdin.on('error',e=>{encodingError=e});
  for(let f=0;f<fps*duration;f++){
   if(encodingError)throw encodingError;
   await page.evaluate(t=>window.renderVideoAt(t),f/fps*1000);
   const png=await page.screenshot({type:'png'});
   if(!encoder.stdin.write(png))await once(encoder.stdin,'drain');
   if(f%100===0)console.log(`Rendered ${f}/${fps*duration} frames`);
  }
  encoder.stdin.end();await finished;console.log(`Created ${video}`);
 }
}finally{await browser.close();if(encoder&&encoder.exitCode===null)encoder.kill();}
