## Worked examples — step-by-step annotated

Worked examples with explanations, extension ideas, and notes about common mistakes.

### Example 1 — Temperature converter (Celsius ↔ Fahrenheit)

Goal: write two small functions to convert temperatures both ways, and a small CLI wrapper.

```python
def c_to_f(c):
    """Convert Celsius to Fahrenheit."""
    return c * 9/5 + 32

def f_to_c(f):
    """Convert Fahrenheit to Celsius."""
    return (f - 32) * 5/9

if __name__ == '__main__':
    print(c_to_f(0))    # 32.0
    print(f_to_c(212))  # 100.0
```

Notes:

- Test boundary values (freezing, boiling) and negative numbers.
- Extension: accept a string like "32F" or "100C" and parse units.

### Example 2 — Word frequency (simple and robust)

Goal: compute counts of each word (case-insensitive), returning a sorted list of (word, count).

```python
from collections import Counter

def word_freq(text):
    words = [w.strip(".,!?;:'\"()[]") for w in text.lower().split()]
    return Counter(words)

print(word_freq("This is a test. This is only a test!"))
```

Notes:

- Strip punctuation and normalise case for better results.
- Extension: ignore stopwords ("the", "and") or implement stemming.

### Example 3 — Sum numbers until blank line (robust)

Goal: read numbers from input until a blank line is entered, ignoring invalid lines but reporting them.

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
            print("Invalid number, ignored")
    return total

if __name__ == '__main__':
    print('Total:', read_numbers_and_sum())
```

Notes:

- Always validate user input. Use `try/except` around conversions.

### Example 4 — Grade calculator (procedural → refactor)

Start with a simple procedural script, then refactor into functions:

```python
def parse_line(line):
    # assume: name,score1,score2,score3
    parts = line.strip().split(',')
    name = parts[0]
    scores = [float(x) for x in parts[1:] if x]
    return name, scores

def average(scores):
    return sum(scores) / len(scores) if scores else 0

def grade(avg):
    if avg >= 70:
        return 'A'
    if avg >= 50:
        return 'C'
    return 'F'

# Sample usage
line = "Ada,78,82,69"
name, scores = parse_line(line)
avg = average(scores)
print(name, avg, grade(avg))
```

Extension ideas:

- Add command-line options and file I/O.
- Output a CSV summary and include class statistics (mean, median).

### Example 5 — Simple search and sort

Illustrate linear search and Python built-ins:

```python
def contains(seq, x):
    for item in seq:
        if item == x:
            return True
    return False

nums = [4, 1, 3, 2]
print(contains(nums, 3))
print(sorted(nums))
```

Notes:

- Use built-in `in` for membership tests in Python: `x in seq`.
- For large datasets, choose an appropriate structure (set for membership tests).

### Example 6 — Recursion (factorial) and iterative version

```python
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n-1)

def factorial_iterative(n):
    res = 1
    for i in range(2, n+1):
        res *= i
    return res

print(factorial_iterative(5), factorial_recursive(5))  # 120 120
```

Notes:

- Recursion is elegant for some tasks; watch recursion depth limits in Python.

---

Each example includes extension ideas — implement at least one extension per example to deepen understanding.

````

### Example 1 — Temperature converter (Celsius ↔ Fahrenheit)

Goal: write two small functions to convert temperatures both ways, and a small CLI wrapper.

```python
def c_to_f(c):
    """Convert Celsius to Fahrenheit."""
    return c * 9/5 + 32

def f_to_c(f):
    """Convert Fahrenheit to Celsius."""
    return (f - 32) * 5/9

if __name__ == '__main__':
    print(c_to_f(0))    # 32.0
    print(f_to_c(212))  # 100.0
```

Notes:

- Test boundary values (freezing, boiling) and negative numbers.
- Extension: accept a string like "32F" or "100C" and parse units.

### Example 2 — Word frequency (simple and robust)

Goal: compute counts of each word (case-insensitive), returning a sorted list of (word, count).

```python
from collections import Counter

def word_freq(text):
    words = [w.strip(".,!?;:'\"()[]") for w in text.lower().split()]
    return Counter(words)

print(word_freq("This is a test. This is only a test!"))
```

Notes:

- Strip punctuation and normalise case for better results.
- Extension: ignore stopwords ("the", "and") or implement stemming.

### Example 3 — Sum numbers until blank line (robust)

Goal: read numbers from input until a blank line is entered, ignoring invalid lines but reporting them.

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
            print("Invalid number, ignored")
    return total

if __name__ == '__main__':
    print('Total:', read_numbers_and_sum())
```

Notes:

- Always validate user input. Use `try/except` around conversions.

### Example 4 — Grade calculator (procedural → refactor)

Start with a simple procedural script, then refactor into functions:

```python
def parse_line(line):
    # assume: name,score1,score2,score3
    parts = line.strip().split(',')
    name = parts[0]
    scores = [float(x) for x in parts[1:] if x]
    return name, scores

def average(scores):
    return sum(scores) / len(scores) if scores else 0

def grade(avg):
    if avg >= 70:
        return 'A'
    if avg >= 50:
        return 'C'
    return 'F'

# Sample usage
line = "Ada,78,82,69"
name, scores = parse_line(line)
avg = average(scores)
print(name, avg, grade(avg))
```

Extension ideas:

- Add command-line options and file I/O.
- Output a CSV summary and include class statistics (mean, median).

### Example 5 — Simple search and sort

Illustrate linear search and Python built-ins:

```python
def contains(seq, x):
    for item in seq:
        if item == x:
            return True
    return False

nums = [4, 1, 3, 2]
print(contains(nums, 3))
print(sorted(nums))
```

Notes:

- Use built-in `in` for membership tests in Python: `x in seq`.
- For large datasets, choose an appropriate structure (set for membership tests).

### Example 6 — Recursion (factorial) and iterative version

```python
def factorial_recursive(n):
    if n <= 1:
        return 1
    return n * factorial_recursive(n-1)

def factorial_iterative(n):
    res = 1
    for i in range(2, n+1):
        res *= i
    return res

print(factorial_iterative(5), factorial_recursive(5))  # 120 120
```

Notes:

- Recursion is elegant for some tasks; watch recursion depth limits in Python.

---

Each example includes extension ideas — implement at least one extension per example to deepen understanding.
