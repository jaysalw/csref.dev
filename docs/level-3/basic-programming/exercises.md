## Exercises — progressive and extensive

This curated set of exercises ranges from quick warm-ups to more substantial tasks suitable for a mini-project. Each exercise includes an estimated difficulty, suggested hints, and optional stretch goals.

Beginner (warm-ups)

1) Hello, name — difficulty: easy

   - Prompt the user for their first and last name and print: "Hello, Ada Lovelace!" using an f-string.
   - Hint: use `input()` twice or split a single input.

2) Sum of list — difficulty: easy

   - Given the list [3, 7, 2, 9], compute the sum first with a loop, then with `sum()`.
   - Stretch: write a function that computes the sum without using `sum()` or loops (use recursion).

3) Even numbers filter — difficulty: easy

   - Write a function that takes a list of integers and returns a list with only the even numbers.

Intermediate (practice standard idioms)

4) FizzBuzz variant — difficulty: medium

   - Return a list for numbers 1..n with Fizz/Buzz/FizzBuzz rules rather than printing.
   - Add tests for n=1, n=15 and n=30.

5) Word frequency — difficulty: medium

   - Write a function that accepts a text string and returns a dictionary mapping words to counts (case-insensitive). Remove simple punctuation and normalise whitespace.
   - Stretch: return the top-k most frequent words.

6) Temperature parser — difficulty: medium

   - Accept inputs like "32F" or "0C" and convert to Celsius floats robustly. Handle malformed input.

Advanced (bigger tasks)

7) Grade calculator — difficulty: medium → hard (project)

   - Read a CSV where each line contains `name,score1,score2,...`.
   - Compute per-student average, class average, and assign letter grades by configurable thresholds.
   - Output a CSV with `name,average,grade` and a short human-readable summary.

8) Simple search and index — difficulty: medium

   - Given a list of records (dicts with `id` and `value`), build an index mapping `id` to record for O(1) lookup.

9) Small algorithm — difficulty: hard

   - Implement a simple dedup-and-sort routine that takes a list of integers containing duplicates and returns a sorted list of unique values. Do not use `set()` for the first implementation; then implement using `set()` and compare performance for large inputs.

Hints and approach

- Break problems into small functions; test each function.
- Use assertions and simple test cases while developing.
- For file-based tasks, start by writing code that works on in-memory strings and then adapt to files.

Assessment suggestions (for instructors)

- Beginner tasks: correctness and basic input validation.
- Intermediate: readability, tests, and handling of edge-cases.
- Advanced: decomposition into functions, tests, and reasonable performance for inputs up to 100k items where applicable.

---

Use `solutions.md` only after attempting these tasks yourself. The solutions include one or more clear, well-documented approaches and notes on complexity.
