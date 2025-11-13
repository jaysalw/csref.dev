# Using Git — Practical guide

This guide covers everyday Git commands and workflows for managing code, collaborating with others, and recovering from mistakes. Examples use PowerShell on Windows and reference GitHub where relevant.

## What is Git?

- Git is a distributed version-control system that records snapshots of a project. It lets you track changes, collaborate with others, and revert to previous states.

## Basic workflow (quick summary)

1. Create or clone a repository.
2. Create a feature branch.
3. Edit files, stage changes, and commit with clear messages.
4. Push your branch to a remote and open a Pull Request (PR) for review.
5. Address review comments, merge the branch into the main branch, and pull the latest changes locally.

## Common commands (PowerShell examples)

- Configure Git (once per machine):

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

- Clone a remote repository:

```powershell
git clone https://github.com/owner/repo.git
cd repo
```

- Create and switch to a branch (feature branch):

```powershell
git checkout -b feature/my-change
```

- Stage files and commit:

```powershell
git status
git add README.md src/module.py
git commit -m "Add preliminary module and update README"
```

- Push branch to remote:

```powershell
git push -u origin feature/my-change
```

- Update local main branch and merge remote changes:

```powershell
git checkout main
git pull origin main
```

## Inspecting history and differences

- View recent commits:

```powershell
git log --oneline --decorate --graph --all
```

- See what changed in the working tree:

```powershell
git status
git diff            # unstaged changes
git diff --staged   # staged changes
```

## Branching strategies (simple guidance)

- Use short-lived feature branches for new work (one feature per branch).
- Keep `main` deployable; merge only reviewed, passing code.
- Use descriptive branch names: `feature/login`, `fix/typo-README`.

## Collaborating and remotes

- `origin` is the default name for the remote you cloned from. Add other remotes for forks or upstream:

```powershell
git remote -v
git remote add upstream https://github.com/upstream/repo.git
```

- Fetch updates from a remote without merging:

```powershell
git fetch origin
```

- Rebase vs merge when integrating changes:
  - `git merge` produces a merge commit and preserves history.
  - `git rebase` rewrites your branch onto a new base to produce a linear history (use carefully, especially with shared branches).

Example: update your feature branch with latest main (merge):

```powershell
git checkout feature/my-change
git fetch origin
git merge origin/main
```

Or using rebase (keeps a linear history):

```powershell
git checkout feature/my-change
git fetch origin
git rebase origin/main
```

## Resolving conflicts

- Conflicts happen when the same lines are changed in two branches.
- Steps to resolve:
  1. Git will pause the merge or rebase and mark conflict files.
  2. Open the files, search for conflict markers `<<<<<<<`, `=======`, `>>>>>>>` and edit to the desired content.
  3. Stage the resolved files: `git add <file>`.
  4. Continue the merge (commit) or rebase (`git rebase --continue`).

Example conflict resolution (merge):

```powershell
# after `git merge origin/main` and conflicts appear
git status
# edit the files to fix conflicts
git add resolved_file.py
git commit -m "Merge origin/main: resolve conflicts in resolved_file.py"
```

## Undoing changes safely

- Discard unstaged changes in a file:

```powershell
git checkout -- path/to/file
```

- Unstage a staged file (keep working tree changes):

```powershell
git restore --staged path/to/file
```

- Amend the last commit (for small fixes, before pushing):

```powershell
git commit --amend --no-edit
```

- Revert a commit that is already in the history (safe for shared branches):

```powershell
git revert <commit-hash>
```

- Reset to a previous commit (rewrites history — avoid on shared branches):

```powershell
git reset --hard <commit-hash>
```

## Useful tips and best practice

- Write clear commit messages: short subject (50 chars), blank line, optional longer body explaining why.
- Use `.gitignore` to keep build artifacts and credentials out of the repository.
- Use small, focused commits so changes are easier to review.
- Add tests and run them before pushing (CI systems will also run tests).

---

This guide is the detailed companion to the Using Git overview page and examples.
