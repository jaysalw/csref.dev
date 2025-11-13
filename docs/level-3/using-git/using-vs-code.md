# Using Git in VS Code — Level 3

This guide covers Git workflows in Visual Studio Code, including the Source Control view, branching, resolving conflicts, pushing and pulling, and useful settings.

## Prerequisites

- Install Git on the machine and ensure it is available in PATH. Verify by running `git --version` in a terminal.
- Install Visual Studio Code (current stable release).
- Configure Git user name and email globally if not already set:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Opening a repository

- Open the project folder in VS Code (`File → Open Folder` or `code .` from the repository root).
- The Source Control icon in the Activity Bar (left) shows the current repository state. If the folder is not a Git repository, initialise one with the `Initialise Repository` button or run `git init` in the terminal.

## Source Control view — daily workflow

- The Source Control view lists unstaged (Changes) and staged (Staged Changes) files. Use the plus icon next to a file to stage it, or the `+` at the top to stage all changes.
- Use the message box at the top of the Source Control view to type a concise commit message. Use the checkmark to commit staged changes.
- Common actions available from the file context menu:
  - Stage / Unstage
  - Discard changes (use with caution)
  - Open file history or compare with HEAD

## Branching and switching

- Click the branch indicator in the status bar (bottom-left) to view and switch branches, or to create a new branch.
- Creating a branch inside VS Code mirrors `git checkout -b <branch>` behaviour. Use descriptive branch names like `feature/add-login` or `fix/typo`.

## Pull, push and fetch

- Use the three-dot menu in the Source Control view or the status bar icons to `Pull`, `Push`, and `Fetch` from the remote.
- Regularly `Pull` (or `Fetch` + `Merge`/`Rebase`) to keep the local branch up to date with the remote. Use `Push` to upload local commits to the remote.

## Working with remotes and PRs

- VS Code integrates with GitHub through the GitHub Pull Requests and Issues extension (optional). The extension provides a UI to create, review and merge pull requests without leaving the editor.
- Remotes may be inspected and managed via the `Remote` commands or the terminal (`git remote -v`, `git remote add <name> <url>`).

## Resolving merge conflicts in VS Code

- When a merge or rebase results in a conflict, VS Code marks the conflicted files in the Source Control view and highlights conflict regions in the editor.
- The editor shows three actions for each conflict block: `Accept Current Change`, `Accept Incoming Change`, and `Accept Both Changes` (or `Compare Changes`). Use the action buttons to pick the desired result. Edit manually when a combined custom resolution is required.
- After resolving conflicts in all files, stage the resolved files and continue the merge or rebase (`git rebase --continue` if rebasing). Commit the merge if necessary.

## Stashing, undo and restore

- Use the terminal or the three-dot Source Control menu to access stash commands. Stash saves local changes for later reuse: `git stash`, `git stash pop`.
- Restore a file to the last committed state with `Discard Changes` from the file context menu in the Source Control view. Use carefully; this action is destructive for local modifications.

## Viewing history and blame

- The built-in timeline view shows local file history. Right-click a file and choose `Show Timeline` to inspect recent commits affecting that file.
- The Git: Toggle Blame Annotations command or extensions such as GitLens provide inline blame information and richer history exploration.

## Useful VS Code settings (recommended)

- Enable auto fetching to keep remote state fresh: set `git.autofetch` to `true`.
- Configure `git.enableSmartCommit` to allow committing without staging when appropriate, but prefer explicit staging for clarity.
- Ensure `files.eol` and core.autocrlf are set appropriately for team line-ending consistency. Use `.gitattributes` for repository-level control.

## Keyboard shortcuts (default)

- `Ctrl+Shift+G` (Windows/Linux) or `Cmd+Shift+G` (macOS) — Open Source Control view.
- `Ctrl+`` (backtick) — Toggle integrated terminal.
- `Ctrl+P` then `#` — Go to Symbol in File (for quick edits during conflict resolution).

## Troubleshooting common issues

- VS Code cannot find Git: ensure Git is installed and the path is visible to VS Code (restart the editor after installing Git).
- Credential prompts: use the Git credential manager for the platform (Windows Credential Manager on Windows) or the GitHub authentication extension.
- Merge conflicts remain after staging: ensure all conflicted files are resolved and staged before continuing a rebase or completing the merge.

## Cheatsheet (commands for reference)

```powershell
# Stage files and commit
git add <file>
git commit -m "message"

# Create and switch to a branch
git checkout -b feature/name

# Update local main and rebase feature branch
git checkout main
git pull origin main
git checkout feature/name
git rebase main

# Push branch to origin
git push -u origin feature/name

# Stash
git stash
git stash pop
```

## Policy and best practice reminders

- Use small, focused commits and meaningful messages.
- Keep `main` in a deployable state.
- Resolve conflicts locally and run tests before pushing.
