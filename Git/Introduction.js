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



*/