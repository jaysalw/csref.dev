## Solutions to exercises

1. Hello, name

```python
first = input("First name: ")
last = input("Last name: ")
print(f"Hello, {first} {last}!")
```

2. Sum of list

Loop version:

```python
values = [3, 7, 2, 9]
total = 0
for v in values:
    total += v
print(total)
```

Built-in version:

```python
print(sum([3, 7, 2, 9]))
```

3. FizzBuzz (short)

```python
for n in range(1, 31):
    out = ""
    if n % 3 == 0:
        out += "Fizz"
    if n % 5 == 0:
        out += "Buzz"
    print(out or n)
```

4. Word frequency

```python
def word_freq(text):
    counts = {}
    for word in text.lower().split():
        counts[word] = counts.get(word, 0) + 1
    return counts

print(word_freq("this is a test this is only a test"))
```

5. Grade calculator (simple)

Read `students.csv` with lines `name,score` and output pass/fail and class average:

```python
def read_scores(path):
    students = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            name, score = line.strip().split(",")
            students.append((name, float(score)))
    return students

def grade_report(students, pass_mark=50.0):
    total = 0
    for name, score in students:
        total += score
        result = "PASS" if score >= pass_mark else "FAIL"
        print(f"{name}: {score:.1f} -> {result}")
    avg = total / len(students) if students else 0
    print(f"Class average: {avg:.1f}")

if __name__ == "__main__":
    students = read_scores("students.csv")
    grade_report(students)
```

Notes

- These solutions prioritise clarity over cleverness. They are intended as reference implementations to compare against student attempts.
- Error handling (malformed lines, missing files) is omitted for brevity but should be added for production code.
