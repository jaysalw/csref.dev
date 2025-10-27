## Variables and Types

Variables store named values that your program can read and change. Types describe what kind of data a value represents and what operations are valid.

Core concepts

- Variable: a name bound to a value
- Primitive types: integers, floating-point numbers, strings, booleans
- Type conversion: converting one type to another when needed
- Immutability vs mutability: some types (like strings) are immutable; others (like lists) can be changed in place

Examples (Python)

```python
# integer
count = 5

# float
price = 3.50

# string
name = "Ada"

# boolean
is_ready = True

# type conversion
total = int(price) + count  # explicit conversion
print(type(total))
```

Notes

- Choose the simplest type that represents your data clearly.
- Use descriptive variable names. Prefer `student_score` to `s`.
- Keep scope local where possible: prefer function-local variables over globals.

Quick exercises

1. Create variables for first name, last name and age. Print a single sentence that introduces the person.
2. Convert a string containing digits (e.g., "42") into an integer and add 8.
