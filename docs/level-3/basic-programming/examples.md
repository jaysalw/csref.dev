## Worked examples

Example 1 — Temperature converter (Celsius → Fahrenheit)

```python
def c_to_f(c):
    return c * 9/5 + 32

print(c_to_f(0))  # 32.0
print(c_to_f(100))  # 212.0
```

Example 2 — Word frequency (simple)

```python
text = "this is a test this is only a test"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1

print(counts)
```

Example 3 — Simple input-driven program: sum numbers until blank line

```python
total = 0
while True:
    s = input("Enter a number (blank to finish): ")
    if s.strip() == "":
        break
    total += int(s)
print("Total:", total)
```

Each example is intentionally short. Try modifying them (add error handling, change output format) as exercises.
