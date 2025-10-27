# Using Git — Exercises

These exercises are progressive: start with the warm-ups then try the guided tasks.

Beginner

1) Initialise a repository and make two commits.

   - Commands: `git init`, create files, `git add`, `git commit`.

2) Create a branch and make a small change, then merge it into `main`.

   - Commands: `git checkout -b`, edit files, `git commit`, `git checkout main`, `git merge`.

Intermediate

3) Clone a public repository, create a branch, push it to your fork (or to origin if you have permissions), and open a Pull Request on GitHub.

   - Commands: `git clone`, `git remote -v`, `git checkout -b`, `git push -u origin <branch>`.

4) Simulate and resolve a merge conflict (follow the example on `examples.md`).

Advanced

5) Rebase a feature branch onto an updated `main` branch and resolve any conflicts. Compare `git merge` vs `git rebase` results.

6) Use `git revert` to undo a single commit that has already been pushed.

Hints

- Use `git status` and `git log --oneline --graph` frequently.
- If you are unsure about a command, try it in a disposable test repository.

Solutions

- Solutions are not provided inline — try the exercises first and consult the examples or online Git documentation if stuck.
