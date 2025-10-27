# Basic Programming — Level 3

This expanded section is a comprehensive, practical guide to the essential programming concepts a Level 3 learner needs to become confident writing small programs. It is intentionally language-agnostic where possible, but the worked examples and exercises use Python for clarity. Wherever appropriate, notes for JavaScript or pseudocode are included to make the ideas portable.

This page explains how to use the material, a suggested week-by-week learning plan, an end-of-section mini-project, and assessment criteria you can use for self-evaluation or classroom marking.

## How to use this section

- Read one topic page at a time. Each topic includes concise explanations, annotated examples, and short exercises.
- Work the examples in a REPL or small file. Modify them to check your understanding.
- Attempt the exercises listed in `exercises.md`. Use `solutions.md` only after you've tried to solve them yourself.
- Keep a small coding notebook (digital or paper) where you save one-line notes on mistakes you made and how you fixed them.

## Suggested 6-week learning schedule (self-study)

Week 1 — Foundation
- Read `learning-objectives.md` and `overview.md`.
- Work through `variables-and-types.md` and basic exercises.

Week 2 — Control flow and small programs
- Study `control-flow.md` and write small conditional and loop-driven programs.

Week 3 — Data structures and searching
- Read `data-structures.md`. Practice using lists, dictionaries, sets, and tuples.

Week 4 — Functions and decomposition
- Read `functions.md`. Refactor earlier programs into functions and add docstrings.

Week 5 — I/O, debugging and integration
- Read `io-and-debugging.md`. Add file I/O to the grade calculator and practice debugging.

Week 6 — Project and polish
- Complete the end-of-section project (described below).
- Review `further-reading.md` and create a personal learning plan.

## End-of-section mini-project — Class grades manager (recommended)

Build a small command-line program that:

- Reads a CSV file of student names and multiple assignment scores per line.
- Calculates per-student averages and class statistics (mean, median, min, max).
- Assigns a letter grade using a configurable scale.
- Produces two outputs: a human-readable summary printed to the console and an output CSV with name, average, grade.

Suggested milestones:

1. Start by parsing a single line and extracting numbers.
2. Add calculation of average for one student.
3. Extend to multiple students stored in a list/dictionary.
4. Add command-line options (optional): file path, delimiter, pass mark.
5. Add tests for helper functions (e.g., average calculation, grade assignment).

## Assessment and success criteria

To consider the section completed, you should be able to:

- Explain the difference between mutable and immutable types and give examples.
- Write and test at least five small functions with docstrings and simple unit tests.
- Implement the mini-project with correct parsing and output for a provided sample CSV.
- Demonstrate debugging skills: identify and fix an introduced bug in a provided snippet.

Grading rubric (self-assessment):

- 80–100%: Code is correct, well-documented (docstrings), and structured into functions; includes basic tests and handles common input errors.
- 60–79%: Code is mostly correct but may lack tests or robust error handling.
- 40–59%: Partial functionality; several edge cases unhandled or missing decomposition into functions.
- <40%: Major features missing; program does not run.

## Next steps after this section

- Follow the Level 4 pages for software development practices and testing.
- Start solving small problems on Exercism or Project Euler to build fluency.

---

Related pages in this section:

- Learning objectives — level-3/basic-programming/learning-objectives.md
- Variables & types — level-3/basic-programming/variables-and-types.md
- Control flow — level-3/basic-programming/control-flow.md
- Data structures — level-3/basic-programming/data-structures.md
- Functions — level-3/basic-programming/functions.md
- I/O & Debugging — level-3/basic-programming/io-and-debugging.md
- Examples — level-3/basic-programming/examples.md
- Exercises — level-3/basic-programming/exercises.md
- Solutions — level-3/basic-programming/solutions.md
- Further reading — level-3/basic-programming/further-reading.md
