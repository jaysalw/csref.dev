## Solutions to exercises

Reference solutions with explanations and tests.

### 1) Hello, name

```python
def greet_from_input():
    first = input("First name: ")
    last = input("Last name: ")
    print(f"Hello, {first} {last}!")

# Example: simulate calls in tests by passing known strings or refactoring input() usage.
```

Notes: straightforward; prefer f-strings for readability.

### 2) Sum of list

Loop version (explicit):

```python
def sum_loop(values):
    """
    Calculate the sum of a list of numbers using a loop.

    Args:
        values (list of numbers): The numbers to sum.

    Returns:
        int or float: The sum of the input numbers.
    """
    total = 0
    for v in values:
        total += v
    return total

assert sum_loop([3,7,2,9]) == 21
```

Built-in version (concise):

```python
assert sum([3,7,2,9]) == 21
```

### 3) FizzBuzz (returning a list)

```python
def fizzbuzz(n):
    """
    Generate the FizzBuzz sequence from 1 to n.

    Parameters:
        n (int): The upper bound of the sequence (inclusive).

    Returns:
        list: A list where each element is either the number, "Fizz", "Buzz", or "FizzBuzz"
        according to the FizzBuzz rules.
    """
    out = []
    for i in range(1, n+1):
        s = ''
        if i % 3 == 0:
            s += 'Fizz'
        if i % 5 == 0:
            s += 'Buzz'
        out.append(s or i)
    return out

assert fizzbuzz(15)[14] == 'FizzBuzz'
```

### 4) Word frequency

```python
from collections import Counter

def word_freq(text):
    words = [w.strip(".,!?;:\"'()[]") for w in text.lower().split()]
    return Counter(words)

assert word_freq("this is a test this is only a test")["this"] == 2
```

### 5) Grade calculator (robust version)

This version includes basic error handling and writes an output CSV.

```python
import csv
from statistics import mean

def read_scores(path):
    students = []
    with open(path, encoding='utf-8', newline='') as f:
        reader = csv.reader(f)
        for row in reader:
            if not row:
                continue
            name = row[0].strip()
            try:
                scores = [float(x) for x in row[1:] if x.strip()]
            except ValueError:
                # skip malformed score rows or handle differently
                scores = []
            students.append((name, scores))
    return students

def compute_report(students, pass_mark=50.0):
    rows = []
    all_avgs = []
    for name, scores in students:
        avg = mean(scores) if scores else 0
        all_avgs.append(avg)
        grade = 'A' if avg >= 70 else ('C' if avg >= 50 else 'F')
        rows.append((name, avg, grade))
    class_avg = mean(all_avgs) if all_avgs else 0
    return rows, class_avg

def write_report(path, rows):
    with open(path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(('name', 'average', 'grade'))
        for r in rows:
            writer.writerow(r)

if __name__ == '__main__':
    students = read_scores('students.csv')
    rows, class_avg = compute_report(students)
    write_report('report.csv', rows)
    print(f'Class average: {class_avg:.1f}')
```

Notes: this version is resilient to missing scores and uses `statistics.mean`. For production, add better error reporting and CLI options.

---

Alternative approaches and performance notes are included inline with each solution. Use these as a baseline, then refactor for clarity or performance.
