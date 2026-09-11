# docdr LinkedIn video

Upload `output/docdr-linkedin-1080x1350.mp4` to LinkedIn as a native video. Select `output/docdr-linkedin-thumbnail.png` as the cover. The video communicates through visible text and has no audio track. The optional `output/docdr-linkedin-captions.srt` provides a concise timed text track.

Use `linkedin-post.md` for the accompanying post after the skill PR is merged into `main`. Its link points to the main repository so readers can follow the README’s plugin or manual installation steps. Before that merge, the default branch still contains only the starter README.

## Edit and render

Edit `video.html` for typography, colors, and animation. `storyboard.md` contains the narrative and timing. `logo.png` is the existing docdr logo, used unchanged.

Install Node.js, Google Chrome or Chromium, and the pinned packages, then render:

```sh
npm install
npm run preview
npm run render
```

Set `CHROME_PATH` if the browser is installed elsewhere. `DOCDR_RENDER_DEPS` can point to another installed `package.json` to reuse its rendering dependencies.

The renderer exports representative frames, a thumbnail, and a layout report before encoding. Output: 28 seconds, 1080 × 1350, 25 fps, H.264, YUV 4:2:0, square pixels, with fast-start metadata.

## Design and review

Large typography, wide margins, and visible copy support viewing without audio. Three-to-seven-second scenes give the audience time to read. These choices fit [LinkedIn's upload specifications](https://www.linkedin.com/help/linkedin/answer/a7174587); 4:5 is also a [recommended feed-ad ratio](https://www.linkedin.com/help/linkedin/answer/a424737).

Independent copy review tightened the claim about guidance, shortened the example, and moved credits to the post. Visual review checked five representative frames and the thumbnail. It prompted a larger illustrative-example label and a correction to the installation CTA. The final media is locally validated; LinkedIn upload/transcoding is not tested, and nothing has been posted.

Final validation: all 700 frames decoded successfully. The exported stream is H.264 at 25 fps, 1080 × 1350, 4:5, SAR 1:1, approximately 1.99 Mbps, and 28 seconds. First, comparison, and closing frames were extracted from the final MP4 and visually inspected. Final peer re-review found no remaining material copy or visual issues. The initial low-bitrate export was re-encoded to the 2 Mbps target; the editable renderer uses that target for future renders. `output/SHA256SUMS.txt` identifies the deliverables.
