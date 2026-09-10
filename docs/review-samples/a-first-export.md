# Export your first saved records

In this exercise, you will export three saved records to a new CSV file. CSV is a text format commonly used to move tabular data between tools.

Start with Relay CLI v2 installed and the practice records already saved: Mira (ID 1), Sam (ID 2), and Lee (ID 3). Open your terminal in a writable practice folder that does not contain a file named `first-export.csv`.

## See what you will export

Run:

```sh
relay list
```

Check that the saved records include Mira, Sam, and Lee with IDs 1, 2, and 3. These are the three records you will export. The display layout is not specified here.

## Create the CSV file

Run:

```sh
relay export --format csv --output first-export.csv
```

`--format csv` selects CSV. `--output first-export.csv` names the new local file.

For the three-record practice fixture, the expected message is:

```text
Exported 3 records
```

Relay exports all saved records, so the message confirms that all three practice records were exported.

## Look at the result

Open `first-export.csv` from your practice folder in a text editor. Find the three records and their IDs. The exact CSV layout is not specified here.

You have made a local CSV export of your saved records. To repeat this exercise, start in another writable practice folder with no `first-export.csv` file. Relay refuses to overwrite an existing file.

For an export blocked by an existing file, use [the collision guide](b-export-existing-file.md). For the available options, see [the export reference](c-export-reference.md).
