/*
Version Control System

version - a perticuler state of software.

vcs help us to track that manage versions and their rollback. compare change in version.
and collaboration.

open source
easily maintains code integrity.
secure
flexibility
 
Command:

git init:  It initialize your git repository,


a new version -> a new commit
initially all the files are untrack.

git add: git start tracking changes to the file.

git add .  adds all the changes

git log: all the commit


How internally git sstores the data?

internally git is a <key, value> data store.

Key: hash of the data we want to store.
value: actual blob data.

key is 40 digit hexadecimal value.
for some data this hash will be same.
value: git stores the compress data in a blob, and some more metadta in a header. 
blob is a big large object.
blob is a identifier. 
inside header there are also size of the content, content of the data.

SHA1 hash.

.git
├── branches
├── config
├── description
├── HEAD
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── fsmonitor-watchman.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-merge-commit.sample
│   ├── prepare-commit-msg.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── push-to-checkout.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags



.git
├── branches
├── config
├── description
├── HEAD
├── index
├── info
│   └── exclude
├── objects
│   ├── d5
│   │   └── 56459392fbdb5c5e2af63ec40aa1eb131f92b5
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags

so here under object folder new file created
d5 is first 2 charecter of hash and remaing 38 in file name. 

if we have 2 set of data that are identical git will not create new blocks for it.
inside git contains only store once.

files are handeled in terms of block.

How git handled directories?

Tree:

This tree store information about directories and their contains.

Tree contains pointer to other blob and tree .

git internallly does a lot of optimization, the objects are stored in compressed form.
it normly stores data about the change to algorithimically shows us the file created make 
that change.

git cat-file <flag> <hash> :

<hash> 5-6 charecter of hash

if <flag> -t -> type of the object
          -p -> the content of the object

git cat-file -t d5564
- blob

type of a folder will be tree

Commit;
stores as an object.
every commit object points to a tree.
the commit object has data of author & commiter.
date
message
parent commit

commit object contains the data of author and changes.
if we make new commit it will create new commit object.

git commit --amend->
will open your editor, allowing you to change the commit message of the most recent 
commit. Additionally, you can set the commit message directly in the command line 
with:
git commit --amend -m "New commit message"->
…however, this can make multi-line commit messages or small corrections more 
cumbersome to enter.
Make sure you don't have any working copy changes staged before doing this or 
they will get committed too. (Unstaged changes will not get committed.)

git log --online -> 
which commit git head courrently pointing to.

whenever we code , it can live in one of the area
1. working area
2. staging area
3. repo

working area: the file/changes which are not in your staging area and maybe currently 
not handled by git are working areas. This files/changes also called as untracked 
files.

staging area: files/changes which are surely going to be part of the next commit are in 
statergy area. (i.e on file/changes when we do git add)
staging area is the place where git know what will change between current and next commit.

git restore <file> ->
to discard changes in working directory

git rm --cached <file> ->
to comepletely make itt untracked


git add -p : shows the change

git checkout -b <name> -> switched to new branch
git checkout branch_name -> switched to that branch





*/