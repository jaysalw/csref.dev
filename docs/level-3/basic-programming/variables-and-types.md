## Variables and Types

Variables, data types, and typing concepts.

### What is a variable?

- A variable is a name bound to a value (an object in memory). The name is a reference: the value itself may be stored elsewhere.
- Languages differ in whether types are static (checked at compile time) or dynamic (checked at runtime). This course uses Python examples (dynamic typing) but the concepts apply broadly.

### Primitive types (core)

- Integer (int): whole numbers, e.g., -1, 0, 42.
- Floating point (float): real numbers represented approximately, e.g., 3.14. Beware rounding errors.
- String (str): sequences of characters. Often used for text input and filenames.
- Boolean (bool): True/False values used in conditions.

Examples (Python):

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
total = int(price) + count  # explicit conversion: float -> int then add
print(type(total))  # <class 'int'>
```

### Composite types

- List: ordered, mutable collection (Python `list`).
- Tuple: ordered, immutable collection (Python `tuple`).
- Dictionary/Map: key → value lookup (Python `dict`).
- Set: an unordered collection of unique items (Python `set`).

### Mutability and aliasing

- Mutable types (e.g., list, dict) can be changed in place. Immutable types (e.g., int, str, tuple) cannot. Example:

```python
a = [1, 2, 3]
b = a  # b references the same list object
b.append(4)
print(a)  # [1, 2, 3, 4]
```

Aliasing (multiple names referring to the same object) is a common source of bugs — be intentional about copying when needed (`list(a)`, `a.copy()`).

### Naming conventions and scope

- Use descriptive names: `student_score` is clearer than `s`.
- Keep variables local where possible (inside functions). Avoid global mutable variables.
- For constants, use ALL_CAPS names by convention.

### Type conversion and coercion

- Implicit conversion (coercion) happens automatically in some languages; explicit conversion is safer. In Python, convert with `int()`, `float()`, `str()`.
- Be careful converting floats to ints — the fractional part is lost.

Example — safe parsing of input:

```python
def parse_int(s, default=0):
	try:
		return int(s)
	except ValueError:
		return default

print(parse_int("42"))   # 42
print(parse_int("x", -1)) # -1 (fallback)
```

### Memory and value vs reference (brief)

- Small immutable values (ints, small strings) are cheap to copy.
- Large structures (lists, dicts) are referenced; passing them to functions passes a reference to the same object.

### Common pitfalls

- Treating mutable defaults carelessly in functions: `def f(x, seen=[]):` — the default list is shared across calls. Use `None` and create a new list inside.
- Off-by-one errors when sampling indices (0-based indexing in Python).
- Relying on float equality; prefer tolerances (abs(a-b) < 1e-9).

### Quick exercises and stretch tasks

1. Create variables for first name, last name and age. Print a single sentence introducing the person (use f-strings).
2. Convert a string containing digits ("42") into an integer and add 8. Handle non-digit input gracefully.
3. Write a function `merge_unique(a, b)` that returns a list containing unique items from `a` then `b`, preserving order.

Stretch: write a small benchmark that shows the difference in time between copying a list with slicing versus using `list()` on a list of 1e6 integers.

---

See `control-flow.md` for conditional-based examples and `data-structures.md` for deeper examples using lists and maps.
