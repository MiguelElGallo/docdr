# `relay export`

Relay CLI v2 exports all saved records to a new local file. It does not use a remote service.

```text
relay export --format {csv|json} --output PATH
```

Braces indicate a choice; do not type them. Replace `PATH` with the destination file path.

| Option | Required | Value and constraints |
| --- | --- | --- |
| `--format` | Yes | `csv` or `json`; no default is supplied. |
| `--output` | Yes | Local destination file path. The file must not already exist; no default is supplied. |

| Outcome | Exit code | Result |
| --- | --- | --- |
| Success | `0` | Creates the export file. For the supplied three-record fixture, prints `Exported 3 records`. |
| Destination file exists | `3` | Reports `File already exists`. Does not overwrite the existing file. |

```sh
relay export --format csv --output records.csv
```

This example requires `records.csv` to be unused. Exact serialization details and behavior for missing or empty option values, invalid formats, and other errors are not specified by the supplied contract.

Related: [`relay list` displays saved records](a-first-export.md#see-what-you-will-export); [resolve an existing-file error](b-export-existing-file.md).
