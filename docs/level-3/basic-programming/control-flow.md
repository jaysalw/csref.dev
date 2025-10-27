## Control flow

Control flow determines which statements in a program run and how many times. The two main control structures are conditionals and loops.

Conditionals

Use `if`, `elif`/`else` to choose between alternatives.

```python
score = 72
if score >= 70:
    print("Pass")
elif score >= 50:
    print("Borderline")
else:
    print("Fail")
```

Loops

- `for` loops iterate over sequences (lists, range, strings)
- `while` loops repeat until a condition is false

```python
for i in range(5):
    print(i)

count = 0
while count < 3:
    print("tick")
    count += 1
```

Control keywords

- `break` stops the loop early
- `continue` skips to the next iteration

Common pitfalls

- Off-by-one errors when using ranges
- Infinite loops when the exit condition never becomes false (ensure loop variables change)
