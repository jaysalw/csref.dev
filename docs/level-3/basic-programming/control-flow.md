## Control flow

Conditionals (branching) and loops (repetition).

### Boolean expressions and truthiness

- Boolean expressions evaluate to `True` or `False`. Learn to read them from left to right and understand operator precedence.
- Many languages have "truthy" and "falsy" values: empty sequences, 0, and `None` are typically falsy; non-empty strings, non-zero numbers, and non-empty containers are truthy.

Python examples:

```python
is_ready = True
if not is_ready:
    print("Not ready")

# chained comparisons
score = 72
if 50 <= score < 70:
    print("Borderline")
```

### Conditional statements (if / elif / else)

- Use `if` / `elif` / `else` to express alternatives. Keep each branch short and prefer explanatory variable names for complex conditions.

Example:

```python
score = 72
if score >= 70:
    print("Pass")
elif score >= 50:
    print("Borderline")
else:
    print("Fail")
```

Tips:

- Prefer guard clauses (early returns) in functions to reduce nesting.
- Avoid deeply nested ifs — extract helper functions instead.

### Loops

Loops let you repeat actions. The two main loop kinds are `for` (iterate over a sequence) and `while` (repeat until a condition changes).

For loop example:

```python
for i in range(5):
    print(i)
```

While loop example:

```python
count = 0
while count < 3:
    print("tick")
    count += 1
```

Loop control keywords:

- `break` — exit the loop immediately.
- `continue` — skip the rest of the current iteration and continue.
- `else` on loops (Python): `for` and `while` can have an `else` block that runs if the loop completes normally (no `break`). This is uncommon but useful for search patterns.

Example of `for`/`else` used for searching:

```python
needle = 7
haystack = [1, 3, 5, 7]
for x in haystack:
    if x == needle:
        print("found")
        break
else:
    print("not found")
```

### Loop invariants and correctness

- A loop invariant is a property that remains true before and after each iteration. Stating and checking invariants helps reason about correctness and termination.

Example invariant for summing a list: after processing the first k items, `total` equals the sum of those k items.

### Comprehensions and generator expressions (Python)

Comprehensions provide concise, readable transformations. Use them for mapping/filtering when the operation is simple.

```python
squares = [x*x for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
```

For large datasets prefer generator expressions to avoid building large lists in memory:

```python
gen = (x*x for x in range(10**6))
```

### Common pitfalls

- Off-by-one errors, especially when converting between human-facing counts (1..n) and 0-based indices.
- Infinite loops: ensure the loop condition will become false (update loop variables or use break with caution).
- Modifying a collection while iterating over it — prefer iterating over a copy or collecting removals in a separate list.

Example of the last pitfall:

```python
items = [1, 2, 3, 4]
for x in items:  # don't remove from items while iterating
    if x % 2 == 0:
        items.remove(x)
print(items)  # surprising result
```

Safer pattern:

```python
items = [1, 2, 3, 4]
items2 = [x for x in items if x % 2 != 0]
```

### Advanced control-flow patterns

- Use iterators and `itertools` for streaming data processing.
- Use exceptions for handling unexpected cases rather than embedding many nested conditionals.

### Examples and practice

1. Implement FizzBuzz (1..n) returning a list rather than printing. Add unit tests.
2. Write a function that reads a file of integers (one per line) and returns the maximum using a loop. Ensure it works on empty files (return None or raise a meaningful error).

---

See `variables-and-types.md` for data considerations and `functions.md` for structuring control flow into reusable units.
