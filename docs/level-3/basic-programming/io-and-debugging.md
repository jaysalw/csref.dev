## I/O and Debugging

Input/output

Basic programs interact with users or files. For small examples we usually use standard input/output.

```python
name = input("Enter your name: ")
print("Hello, ", name)
```

For file I/O:

```python
with open("data.txt", "r", encoding="utf-8") as f:
    text = f.read()

with open("out.txt", "w", encoding="utf-8") as f:
    f.write(text.upper())
```

Debugging basics

- Read error messages carefully — they usually point to the problem line and type
- Use print/logging statements to inspect variable values
- Use an interactive REPL or debugger (step through code, set breakpoints) for tricky bugs

Common errors

- SyntaxError: code is not valid Python (e.g., missing colon)
- NameError: using a variable that hasn't been defined
- TypeError: operations on incompatible types

Tips

- Reproduce the problem with a minimal example
- Add assertions to check invariants while developing
