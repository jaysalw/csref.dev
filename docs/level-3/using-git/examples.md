# Using Git — Examples

Short, worked examples you can run in a local test repository.

## Example 1 — Initialise and make your first commit

```powershell
mkdir git-demo
cd git-demo
git init
echo "# Git demo" > README.md
git add README.md
git commit -m "Initial commit: add README"
```

Example 2 — Create a branch, make changes, and merge

```powershell
# create a branch and switch
git checkout -b feature/add-notes
# make changes
echo "Some notes" >> README.md
git add README.md
git commit -m "Add notes to README"
# switch back to main and merge
git checkout main
git merge feature/add-notes
```

Example 3 — Simulate a conflict and resolve it

```powershell
# start from a clean repo with a README.md
# user A
git checkout -b feature/a
echo "Line A" >> README.md
git commit -am "User A: add line A"
# user B (in a second clone or by stashing/committing different change)
git checkout main
git checkout -b feature/b
echo "Line B" >> README.md
git commit -am "User B: add line B"
# merge A into main then attempt to merge B (or vice versa) to cause a conflict
git checkout main
git merge feature/a
git merge feature/b
# resolve conflicts by editing README.md, then
git add README.md
git commit -m "Resolve merge conflict: combine A and B lines"
```

Example 4 — Push to a remote (GitHub)

```powershell
# assuming repository already has remote origin set
git push -u origin feature/add-notes
# open a Pull Request on GitHub and complete review/merge there
```

See `exercises.md` for guided tasks and suggested commands to try.
