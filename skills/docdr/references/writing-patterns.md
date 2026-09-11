# Writing patterns

These original examples use a small Python file to show how the writing changes with the reader's purpose. Use examples from the user's own domain when applying the skill.

## Tutorial: change one thing and observe it

### Print a greeting

Create a file named `greet.py` with this code:

```python
name = "Mira"
print(f"Hello, {name}!")
```

In the folder containing the file, run it with Python 3.6 or later:

```sh
python3 greet.py
```

The program prints:

```text
Hello, Mira!
```

Now change `"Mira"` to `"Sam"` and run the command again. The output becomes `Hello, Sam!`. The text inside the quotation marks is the value stored in `name`; changing that value changes the greeting.

This pattern gives the reader something small to do, a visible result, and an observation tied to that result. A longer tutorial would establish Python installation as a prerequisite and keep building from this same file.

## How-to guide: adapt to a real goal

### Run a Python script from a different folder

Use this when Python 3 is installed and your terminal is outside the script's folder.

Pass the script's path to Python. For example, if `greet.py` is in `/Users/mira/projects`, run:

```sh
python3 /Users/mira/projects/greet.py
```

Replace that example path with the location of your own file. Quote paths containing spaces:

```sh
python3 "/Users/mira/My Project/greet.py"
```

The script runs and prints its normal output. If Python reports that it cannot open the file, check that the path identifies an existing file.

These commands use a macOS or Linux shell. A guide for another environment should give its native path and command syntax.

## Reference: describe the contract

### `str.removeprefix(prefix, /)`

Return a string with the specified leading text removed, if that text is present. Available in Python 3.9 and later.

| Item | Behavior |
| --- | --- |
| `prefix` | Required string, passed as a positional argument. |
| Matching prefix | Remove one occurrence at the start. |
| No match, including different letter case | Return a string with the original content. |
| Empty prefix | Return a string with the original content. |
| Original string | Unchanged. |

```python
"report.csv".removeprefix("report.")  # "csv"
"report.csv".removeprefix("REPORT.")  # "report.csv"
```

For an API in the user's project, derive entries like these from that project's actual public contract. Do not add plausible defaults to make the entry look complete.

## Explanation: connect cause and consequence

### Why keep the greeting separate from the name?

A greeting has a part that stays the same and a part that changes. In `Hello, Mira!`, the name is the changing part.

Storing the name separately lets the same greeting work with a different person. The program can keep the wording in one place and get the name from another source, such as a form.

That separation is useful when names change independently of the message. For a program that prints one fixed sentence forever, an extra variable may not make the code clearer.

This explains a choice and its limits. Instructions for reading a name from a form would belong in a separate guide.

## A sentence repair

Before: “Instantiate the configuration object to facilitate runtime parameterization.”

After: “Create a settings object. It holds values, such as the server port, that you can change without editing the application code.”

The revision names the action and gives the abstract idea a concrete example. Check that the product actually supports changing those settings before making that claim.
