# Export CSV when the output file already exists

Use this guide when Relay CLI v2 reports `File already exists` and exits with code 3. The existing file has not been overwritten. You need Relay installed and a writable location for the new export.

1. Choose an unused output path. For example, if `records.csv` already exists, use `records-new.csv` after checking that it does not exist in the destination folder.

2. Export to that path:

   ```sh
   relay export --format csv --output records-new.csv
   ```

   Replace `records-new.csv` with your chosen unused path. Relay exports all saved records to the new local file.

3. Confirm that the command exits with code 0 and the new file exists. Open it to check the exported records. For the supplied three-record fixture, the expected message is `Exported 3 records`.

If the new path also produces `File already exists`, select another unused path and rerun the export. If you must retain the original output name, first move the existing file to a different unused location using your normal file manager, then export to the now-unused original path.

See [the export reference](c-export-reference.md) for the command contract and [the overwrite explanation](d-overwrite-explanation.md) for the consequences of this behavior.
