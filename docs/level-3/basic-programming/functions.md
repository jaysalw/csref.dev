## Functions — design, patterns and best practice

Function design, patterns, and best practices.

### Defining and calling functions (Python examples)

```python
def greet(name):
    """Return a greeting for name.

    Args:
        name (str): the person's name
    Returns:
        str: greeting text
    """
    return f"Hello, {name}!"

message = greet("Ada")
print(message)
```

### Parameters, defaults and named arguments

- Functions can have positional parameters, default values, and keyword-only arguments.
- Use defaults carefully — avoid mutable defaults (use `None` pattern).

```python
def append_unique(lst=None, value=None):
    if lst is None:
        lst = []
    if value not in lst:
        lst.append(value)
    return lst
```

### *args and **kwargs (varargs)

- Use `*args` for variable positional arguments and `**kwargs` for variable keyword arguments. They are handy for wrapper functions and APIs.

```python
def log_msg(prefix, *args, **kwargs):
    print(prefix, *args, **kwargs)
```

### Pure vs impure functions

- Pure function: same input -> same output, no side-effects. Easier to test and reason about.
- Impure function: reads/writes external state (files, global variables, network). Keep impurity at the edges of your program.

### Recursion and when to use it

- Recursion expresses divide-and-conquer solutions naturally (e.g., tree traversal, factorial). Python recursion depth is limited; prefer iterative approaches for large inputs.

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)
```

### Higher-order functions and closures

- Functions that accept or return other functions enable composition patterns. Closures capture variables from the outer scope.

```python
def make_multiplier(n):
    def mul(x):
        return x * n
    return mul

double = make_multiplier(2)
print(double(5))  # 10
```

### Simple decorator example (Python)

```python
def timeit(fn):
    import time
    def wrapper(*args, **kwargs):
        t0 = time.time()
        res = fn(*args, **kwargs)
        print(f"{fn.__name__} took {time.time()-t0:.6f}s")
        return res
    return wrapper

@timeit
def work(n):
    return sum(range(n))

work(1000000)
```

### Docstrings and small tests

- Write a short docstring describing arguments, return value, and side-effects. Include a short example if helpful.
- Use simple `assert` statements or a small test file with `pytest` or built-in `unittest` to check behaviour.

### Structuring code with functions

- Keep functions small and focused (single responsibility).
- If code needs more than ~40 lines, consider splitting into helper functions.

### Error handling in functions

- Validate inputs and raise appropriate exceptions (`ValueError`, `TypeError`) rather than returning sentinel values unless specified.

### Exercises

1. Refactor the grade calculator program into: `read_scores`, `compute_averages`, `assign_grade`, `write_report` functions with docstrings and small tests.
2. Implement a memoized Fibonacci using a decorator or a cache dict.

---

See `data-structures.md` for structures functions commonly operate on, and `io-and-debugging.md` for testing and running functions safely.
