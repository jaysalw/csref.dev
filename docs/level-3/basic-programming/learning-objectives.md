## Learning objectives

This page lists precise learning outcomes, measurable success criteria, and suggested formative assessment tasks. Use it to decide what to practise and to measure your own progress.

### High-level aims

- Understand core programming concepts necessary to read, write and reason about small programs.
- Develop a habit of decomposing problems into functions, testing small pieces, and iterating.
- Gain practical experience with simple file input/output and debugging workflows.

### Topic-specific learning outcomes (by the end of the section)

- Variables & types: describe primitives and composite types, explain mutability, and convert between types where appropriate.
- Control flow: write conditional logic and loops to implement algorithms, and reason about loop termination and invariants.
- Data structures: choose and use lists, dictionaries, sets and tuples appropriately; implement simple algorithms that traverse and transform them.
- Functions: design, document (docstrings), and test small functions; understand parameter passing and return values; recognise pure versus impure functions.
- I/O & debugging: read from and write to text files, parse simple CSV-like formats, and use print/logging and debugger tools to diagnose problems.

### Measurable success criteria (concrete)

1. Write a short program (15–50 lines) that reads a text file of numbers and outputs per-line statistics (sum, mean, count).
2. Implement at least 5 functions with docstrings and simple assertions or tests, covering:
	- A pure function (no side-effects)
	- A function that reads or writes a file (side-effect)
3. Correctly use lists and dictionaries in at least two solutions: one where a list is the right choice, and another where a dict provides faster lookup.
4. Demonstrate debugging by fixing three introduced bugs in a provided sample (e.g., off-by-one, wrong comparison, incorrect type conversion) and explain each fix in comments.

### Formative assessment tasks (small exercises to check learning)

- Task A: Create and run a function that converts a list of temperature strings ("20C", "68F") into Celsius floats, handling malformed entries gracefully. Show tests for expected inputs and at least two malformed inputs.
- Task B: Implement a FizzBuzz variant returning a list instead of printing; write tests that validate edge cases (1, 15, 16).
- Task C: Given a small CSV file with student scores, write code that computes average and writes a summary CSV; add error handling for missing values.

### Prerequisites and recommended background

- Comfortable using a text editor and running small programs.
- Basic familiarity with file and folder navigation.
- No prior programming required, though prior experience speeds progress.

### Study tips

- Begin by writing small programs and running them frequently.
- Use assertions (assert) to encode expected behaviour while developing.
- Break problems into functions and test functions independently before integrating.

---

If you're an instructor: these learning objectives map to short in-class activities and 1–2 short homework tasks per week; see `exercises.md` and `solutions.md` for aligned tasks.
