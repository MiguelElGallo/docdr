# Why does Relay refuse to overwrite a file?

Suppose you export records to `records.csv`, then try to export to that same path again. The second export encounters a file that already exists. Relay CLI v2 requires a new destination file, so it reports `File already exists`, exits with code 3, and does not overwrite the file.

The documented contract establishes this behavior, but it does not state the designers' rationale. One interpretation is that refusing to overwrite helps preserve an earlier export when a filename is reused accidentally. That is a consequence of the rule, not a confirmed explanation of why the designers chose it.

The tradeoff is an extra decision for repeated exports: you need an unused path, or you need to move the previous file before reusing its path. A tool that replaced files automatically could make repeated exports more convenient, but it could also replace content the user intended to keep. Relay's contract chooses the refusal behavior; it documents no overwrite option.

This rule concerns an existing local destination file. There is no remote service involved in the export.

For steps to complete a blocked export, see [the existing-file guide](b-export-existing-file.md). See [the reference](c-export-reference.md) for exact flags and exit codes.
