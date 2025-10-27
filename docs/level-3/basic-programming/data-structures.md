## Basic data structures

Choosing the right data structure makes programs clearer and faster. This section covers the common built-in structures.

Lists (ordered collections)

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print(fruits[1])  # banana
```

Dictionaries / Maps (key → value)

```python
person = {"name": "Ada", "age": 30}
print(person["name"])  # Ada
person["email"] = "ada@example.com"
```

Sets (unique items, unordered)

```python
ids = {1, 2, 3}
ids.add(4)
```

Tuples (immutable sequences)

```python
point = (3, 4)
```

When to use which

- Use lists for ordered collections you iterate or modify
- Use dictionaries for lookup by key
- Use sets for membership tests and unique items
- Use tuples for fixed collections (like coordinates)

Complexity note

Understanding average-case complexity for common operations (indexing, lookup, insertion) helps when data grows. For example, list append is typically O(1) amortised; dictionary lookup is expected O(1).
