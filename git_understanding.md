# Advanced Git Commands Understanding

## git checkout main -- <file>

### What does it do?
This command restores a specific file from the main branch without affecting other changes in the working directory.

### When would I use it?
In a real project, this is useful when I accidentally modify a file and want to restore only that file from the stable main branch while keeping other unfinished work.

### What surprised me?
I learned that checkout can be used for restoring individual files, not only switching branches.

---

## git cherry-pick <commit>

### What does it do?
Cherry-pick applies a specific commit from another branch into the current branch without merging the entire branch.

### When would I use it?
It is useful when another developer has a small bug fix or important feature commit that needs to be moved into my branch without bringing unrelated changes.

### What surprised me?
I found that a single commit can be transferred between branches while keeping its original commit message and changes.

---

## git log

### What does it do?
Git log displays the commit history of a repository.

### When would I use it?
Developers use it to understand project evolution, find previous changes, investigate bugs, and review contributions from team members.

### What surprised me?
Using --graph and --decorate options makes branch history much easier to understand.

---

## git blame <file>

### What does it do?
Git blame shows who last modified each line of a file and which commit introduced the change.

### When would I use it?
It helps when debugging issues or understanding why a specific line of code exists.

### What surprised me?
I learned that blame is not about assigning responsibility but about tracking the history and context of changes..