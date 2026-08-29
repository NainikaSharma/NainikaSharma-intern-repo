# Git Understanding: Staging vs. Committing

## What is the difference between staging and committing?

**Staging** and **committing** are two separate steps in Git.

Staging means selecting changes that I want to include in the next commit. This is done using:

```bash
git add <file>
```

The staged changes are placed in Git's **staging area**, also called the index. They are not yet permanently recorded in the repository history.

Committing means saving the staged changes as a new entry in the Git repository's history. This is done using:

```bash
git commit -m "Commit message"
```

For example:

```bash
git add git_understanding.md
git commit -m "Add Git staging and committing explanation"
```

Therefore:

* **Working directory** → where I make changes to files.
* **Staging area** → where I select changes that should be included in the next commit.
* **Repository** → where committed changes are permanently recorded in Git history.

## Why does Git separate these two steps?

Git separates staging and committing because it gives developers more control over what goes into each commit.

For example, if I modify three files but only want to commit two of them, I can stage only those two files:

```bash
git add file1.txt
git add file2.txt
```

I can then commit them without including the changes in `file3.txt`.

This helps keep commits organised and focused on a specific change.

## When would I want to stage changes without committing?

I may want to stage changes without committing when:

* I have made changes to several files but only want some of them in the next commit.
* I want to review the changes before committing.
* I am preparing a logical group of changes for one commit.
* I want to check exactly what will be included in the commit.
* I am working on a larger task and want to separate different changes into multiple commits.

Useful commands for checking staged changes include:

```bash
git status
```

and:

```bash
git diff --staged
```

## Practical experiment

I modified `git_understanding.md` and first staged the file using:

```bash
git add git_understanding.md
```

I then checked the status:

```bash
git status
```

Git showed the file under **Changes to be committed**, which demonstrated that the change had been staged but not committed.

I then unstaged the file using:

```bash
git reset HEAD git_understanding.md
```

After running `git status` again, the file appeared under **Changes not staged for commit**. This demonstrated that the changes still existed in my working directory, but they had been removed from the staging area.

Finally, I staged and committed the file:

```bash
git add git_understanding.md
git commit -m "Add Git staging and committing explanation"
```

After committing, `git status` showed that there were no uncommitted changes.

## Conclusion

The main difference is that **staging selects changes for the next commit, while committing records those staged changes in Git history**. Separating these steps allows developers to carefully choose and organise changes before permanently recording them.
