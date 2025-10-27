## Functions

Functions (also called procedures or methods) group code into reusable blocks. They help structure programs and avoid repetition.

Defining and calling

```python
def greet(name):
    return f"Hello, {name}!"

message = greet("Ada")
print(message)
```

Parameters and return values

- Functions can take zero or more parameters
- They can return values (or `None`/void)

Scope and side-effects

- Variables defined inside a function are local by default
- Functions should prefer returning values rather than mutating global state when possible (pure functions)

Higher-order ideas (brief)

- Functions may accept other functions or return functions
- Useful for callbacks and simple functional patterns

Docstrings and testing

Include a short docstring describing arguments, return values, and side effects so others (and you) can use the function correctly. Small functions are easy to unit test.
