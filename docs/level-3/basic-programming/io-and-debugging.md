## I/O and Debugging — robust interaction and finding bugs

Safe I/O patterns, parsing, and practical debugging workflows.

### Console input and output

Use `input()` for simple interactive programs and format output with f-strings for clarity.

```python
name = input("Enter your name: ")
print(f"Hello, {name}")
```

For scripts intended to be used non-interactively, prefer command-line arguments (e.g., `argparse`) so the program can be automated.

### File I/O (text and CSV)

Use context managers to ensure files are closed correctly.

```python
with open("data.txt", "r", encoding="utf-8") as f:
    text = f.read()

with open("out.txt", "w", encoding="utf-8") as f:
    f.write(text.upper())
```

Parsing CSV (simple):

```python
import csv

with open("students.csv", newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        name, score = row[0], float(row[1])
```

### Robust parsing patterns

- Validate input and use `try/except` to report meaningful errors (don't catch Exception blindly).
- Use `strip()` to remove extra whitespace before conversion.

### Logging vs print

- Use `logging` instead of `print` for anything but the simplest scripts; logging levels (DEBUG, INFO, WARNING, ERROR) let you control verbosity.

```python
import logging
logging.basicConfig(level=logging.INFO)
logging.debug("This is a debug message")
logging.info("Started processing")
```

### Debugging workflow

1. Read the error message and the stack trace — it often points directly to the cause.
2. Reproduce the bug with the smallest possible input.
3. Insert assertions or temporary prints to inspect values.
4. Use an interactive debugger (e.g., `pdb` or your IDE's debugger) to step through and inspect variables.
5. Once fixed, add a unit test that reproduces the bug to prevent regressions.

Example using `pdb`:

```python
import pdb

def buggy(v):
    pdb.set_trace()
    return v + 1

buggy('x')
```

### Common errors and how to fix them

- SyntaxError: check the line and preceding lines for missing `:`, unmatched parentheses or indent problems.
- NameError: a variable is used before it has been assigned — check scope and spelling.
- ValueError/TypeError: ensure you are passing values of the correct type; validate and coerce if necessary.

### Testing and quick checks

- Use `assert` for small checks during development: `assert x >= 0, "x must be non-negative"`.
- For structured tests use `pytest` or `unittest` and keep tests in a `tests/` folder.

### Example: reading numbers until blank and reporting sum (robust)

```python
def read_numbers_and_sum():
    total = 0
    while True:
        s = input("Enter a number (blank to finish): ")
        if not s.strip():
            break
        try:
            total += int(s)
        except ValueError:
            print("Invalid number, try again")
    return total

if __name__ == '__main__':
    print('Total:', read_numbers_and_sum())
```

---

See `functions.md` for exhibiting I/O in small testable functions and `exercises.md` for practice problems that require file and console I/O.
