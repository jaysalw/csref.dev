## Data structures — deep dive

Common built-in structures, their properties, typical operations and costs, and practical examples.

### Overview of common structures

- List (ordered sequence, mutable) — Python `list`, JavaScript `Array`.
- Tuple (ordered, immutable) — Python `tuple`.
- Dictionary / Map (associative array) — Python `dict` / JS `Object` or `Map`.
- Set (unordered unique items) — Python `set`.

### Typical operations and complexity (average case)

- Indexing (list): O(1)
- Append (list): O(1) amortised
- Insert in middle (list): O(n)
- Lookup by key (dict): O(1)
- Insert/remove (dict): O(1)
- Membership test (set): O(1)

Knowing these costs helps you choose the right tool when n grows.

### Lists — when to use

- Ordered collection you iterate through or modify frequently.
- Good for small-to-moderate-sized sequences, random reads by index.

Example (Python):

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print(fruits[1])  # banana
```

### Dictionaries / Maps — when to use

- Use dictionaries when you need fast lookup by keys (e.g., id → record).

```python
person = {"name": "Ada", "age": 30}
print(person["name"])  # Ada
person["email"] = "ada@example.com"
```

Tip: when the key set is small and fixed, consider `namedtuple` or dataclass (Python) for more structure.

### Sets — when to use

- Fast membership tests and deduplication. Order is not guaranteed.

```python
ids = {1, 2, 3}
ids.add(4)
```

### Tuples — when to use

- Immutable ordered collections useful for fixed-size records (like coordinates). They are hashable if they contain only hashable items, so they can be used as dictionary keys.

```python
point = (3, 4)
```

### Derived/abstract structures (brief)

- Stack (LIFO): use list with `append()`/`pop()` or `collections.deque` for O(1) pops from both ends.
- Queue (FIFO): use `collections.deque` in Python.
- Linked lists / trees / heaps: useful when specific access or update patterns matter. Python does not provide a built-in linked list — `deque` often suffices.

Example — stack with list:

```python
stack = []
stack.append(1)
stack.append(2)
assert stack.pop() == 2
```

### Choosing between list and dict

- Use a list when order matters or when you need to iterate in sequence by index.
- Use a dict when you need lookup by a key (for example, mapping usernames to profiles).

### Memory considerations

- Dictionaries and sets use more memory than lists because of hashing and storage overhead.
- For very large datasets, prefer streaming approaches and generators rather than building large in-memory structures.

### Common operations and idioms

Count items quickly with `collections.Counter` (Python):

```python
from collections import Counter
text = "this is a test this is only a test"
counts = Counter(text.split())
print(counts.most_common(3))
```

Use `defaultdict` to simplify accumulation:

```python
from collections import defaultdict
dd = defaultdict(int)
for k in ["a", "b", "a"]:
    dd[k] += 1
```

### Practical examples

1. Use a dict to index student records by student id so lookups are O(1).
2. Use a set to remove duplicates from a list before sorting: `sorted(set(items))`.

### Exercises (linked)

- Implement a function that receives a list of words and returns the top 3 most frequent (use `Counter`).
- Implement a function that groups records by a key into a dict of lists.

---

Next: `functions.md` explains how to structure operations on these structures into reusable functions.
