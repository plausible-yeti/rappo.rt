
##Project tools

####Git-Splainin

This is a way to create Pull Request templates that can be used across the entire team and make it really easy to populate PR forms.  It is a really great tool developed as a chrome extension.  You can find it at the webstore.

[Get Git-Splainin](https://chrome.google.com/webstore/detail/git-splainin/adbhpaolgdpdjmejdnpakfncfkdneeea?hl=en-US)

####Getting Floobits

Floobits is awesome platform to collaboratively create and edit associated with the project.  The repo is created as a workspace and then you connect your editor to the workspace.  You will then have your sublime text/Atom/whatever be like google docs for code writing.

[Floobits project_url](https://floobits.com/urbantumbleweed/client-recon)
This project url is on the organization repo on the floo branch.

[set-up instruction](https://floobits.com/help/plugins/sublime)


##Github Tools:

[Github Guide to Issues and Milestones](https://guides.github.com/features/issues/)

####Milestones:

Milestones are an excellent way to contain tasks or issues associated with a feature. Milestones have a title, description and due-date. Github issues can be added to milestones.

####Pull Requests and Issues

Github issues and pull requests are a great way manage the development of a project.  Issues are created with atomic feature additions or bugs.  Pull requests are the means to merge development effort into master branch for production.

Issue definitions should be small and atomic.  This is important so they can represent small, focused changes in code which are in turn encapsulated by small focused commits.  Pull requests should be created with the specific issue or set of issues they address. It is possible to create the Pull Request before the issues are completed and create the points they will address as checkboxes.

[Task lists in issues and PRs](https://github.com/blog/1375%0A-task-lists-in-gfm-issues-pulls-comments)

Issues can have labels, assignees, and milestones.

Both issues an pull requests can have comment threads.  All issues related communication should be kept with the issue on github.  Issues can be linked from other issues.  This is a great way to estabish relationships between related issues.

Also, it is possible to reference issues from commit messages to either close or reference them.

[Closing issues from commits](https://help.github.com/articles/closing-issues-via-commit-messages/)

[Linking issues with mentions](https://github.com/blog/957-introducing-issue-mentions)

Plausible Yeti Git Workflow

0. GITHUB: Fork plausibleyeti/client-recon
0.1.LOCAL: git clone user/client-recon
0.2.LOCAL: git remote add upstream plausibleyeti/client-recon


1. Find issue that you were assigned
  a. Or Assign issue to yourself
1. LOCAL || git status to make sure you are on master
1. LOCAL || git pull --rebase usptream master => makes sure master is up to date with truth
1. LOCAL || git checkout -b feature-IssueThatYouWereAssigned
1. GITHUB || pull request Create initial pull request with Task list of issues
1. LOCAL || git status => to check branch
1. Cyclical
  a. make edits
  b. git add
  c. git commit
1. LOCAL || git pull --rebase upstream master
1. LOCAL || git push origin feature-IssueThatYouWereAssigned
1. GITHUB || pull request finalize and assign
1. IF MAKING Changes to pull request
  a. LOCAL || make changes locally
  b. LOCAL || git add
  c. LOCAL || git commit
  d. LOCAL || git pull --rebase upstream master
  e. LOCAL || git push origin feature-IssueThatYouWereAssigned




SCRUM MASTER // SECOND SET OF EYES
1. review changes and merge
1. merge request







