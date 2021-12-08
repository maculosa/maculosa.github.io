---
draft: false
date: 2021-12-07T09:34:56+08:00
title: "如何修复Git错误：\"fatal: refusing to merge unrelated histories\"[译]"
description: ""
slug: "how to fix fatal refusing to merge unrelated histories error"
authors: "Banmao"
tags: ["Git", "Troubleshooting"]
categories: ["Git"]
externalLink: ""
series: []
---

本文转载至: [https://komodor.com/learn/how-to-fix-fatal-refusing-to-merge-unrelated-histories-error/](https://komodor.com/learn/how-to-fix-fatal-refusing-to-merge-unrelated-histories-error/)

## 什么是 ‘fatal: refusing to merge unrelated histories’ 错误?

`fatal: refusing to merge histories` 错误是一个相当普通的Git错误。它出现在开发者试图将两个不相关的项目合并一个分支的时候。

当该分支的提交历史和标签与拉取秦秋或克隆不兼容时，就会出现这个错误。

## 为什么会发生 ‘fatal: refusing to merge unrelated histories’？

以下是一些常见的情况：

1. 你有一个新的 Git 仓库，有一些提交。 然后，你尝试从一个现有的远程仓库拉取。 由于分支的历史和远程拉取的历史不同，合并变得不兼容。Git 认为你试图合并两个完全不相关的分支，它不知道该怎么做。

2. `.git` 目录出了问题。它可能在某个时候被不小心删除了，或者被破坏了。如果你克隆或清理了一个项目，就会发生这种情况。这里发生的错误是因为 Git 没有关于本地项目历史的必要信息。

3. 当你试图从远程 repo 推送或拉取数据时，各分支处于不同的 `HEAD` 位置，由于缺乏共通性而无法匹配。

## 如何解决 ‘fatal: refusing to merge unrelated histories’ 的问题？

有两种方法可以解决 ‘fatal: refusing to merge unrelated histories’ 错误。

### 方式1：使用 `--allow-unrelated-histories`

解决该问题的第一种方法是使用 `--allow-unrelated-histories` 的 git 标志。

此时的 git 命令是这样的： `git pull origin master --allow-unrelated-histories`。

你可以用你要拉取的远程仓库来代替 `origin`。你也可以用你希望拉取请求合并到的任何分支代替主分支。

`--allow-unrelated-histories` 背后的意思是：git 允许你合并不相关的分支。在没有文件冲突的情况下，这个 git 标志就可以无缝的工作。

然而，实际上，至少会有一件事冒出来，你需要使用正常的 Git 解决流程来解决它们。

下面是一个例子，说明在尝试合并分支时，常见的冲突会是什么样子。

```bash
Auto-merging package.json
CONFLICT (add/add): Merge conflict in package.json
Auto-merging package-lock.json
CONFLICT (add/add): Merge conflict in package-lock.json
Auto-merging README.md
CONFLICT (add/add): Merge conflict in README.md
Auto-merging .gitignore
CONFLICT (add/add): Merge conflict in .gitignore
Automatic merge failed; fix conflicts and then commit the result.
```

### 方式2：`unstage`, `stash`, `clone`, `unstash`, and then `commit`

解决这个问题的另一个方法（也是更长的方法）是解除当前提交的缓存，将他们藏起来，克隆所需的远程仓库，然后将藏起来的分支内容放入新的克隆中。

这将确保你在代码中可能遇到的任何冲突在合并前得到解读，并防止应用错误的发生。

要解除你上次提交的所有文件的缓存，请使用一下 git 命令：`git reset HEAD~`。

要把未保存的文件藏起来，使用以下 git 命令：`git stash`。

这将给你一个干净的工作树来拉入你的远程版本库。一旦你成功拉入你的分支，你就可以解开你的文件，把它们作为一个单独的提交，并解决任何可能存在的文件冲突。

要解开文件缓存，请使用 `git pop`。这将会移动藏匿的修改，并将它们重新应用到你当前的工作副本。

另外，你也可以使用 `git stash apply` 来讲这些修改添加到你当前的工作副本中。

下面是对 `git stash apply` 和 `git pop` 之间区别的快速总结。

- `git pop`：从 repo 仓库中 “取出” 修改，并将其应用到当前代码中。
- `git stash apply`：将修改保留在 repo 仓库中，并将修改应用到当前代码中。

## 如何防止 “fatal: refusing to merge unrelated histories"?

防止 "fatal: refusing to merge unrelated histories" 错误的最简单方法是避免将远程仓库拉入已经有提交的分支。

然而，有时你只是想保留这些提交。防止该错误的方法之一是创建一个全新的分支，把你需要的代码拉进来，然后手动将本地分支合并到主流程中。

下面是一个 git 流程的例子：

```bash
# branch A is where your current code is
# clone in your remote repo into a new and separate branch. 
# For our purposes, it's branch B
 ​
git clone -b [branch] [remote_repo]
 ​
# to merge A into B, you need to be on B
# merge your branches together
git merge A
```

关于合并的唯一一点是，如果代码中出现冲突，除了像往常一样解决外，没有其他办法。

下面是你的合并分支在 Git 上的样子：

```
          C1---C2---C3 branch A
                      \
  Ca---Cb---Cc---Ce---Cf branch B
```

## 用 Komodor 排除 Kubernetes 的故障

上面的指南应该可以帮助你完成你需要遵循的故障排除步骤，已解决 `fatal: refusing to merge unrelated histories` 错误。

当然，这只是你在 K8s 日志中可能遇到的众多 git 错误之一。这种具有欺骗性的小问题，往往容易被忽视，可能会导致严重的问题，而监测它们可能是耗时的、有压力的，而且往往是完全不可能的。

这就是我们创建 Komodor 的原因。Komodor 作为一个单一的真相来源（SSOT），简化并缩短了 K8s 故障排除过程。Komodor 是由开发人员为开发人员建立的，它提供。

变化情报。每一个问题都是一个变化的结果。在几秒内，我们可以帮助你了解到底是谁做了什么，什么时候做的。

深入的可视性。一个完整的活动时间表，显示所有的代码和配置变化、部署、报警、代码差异、Pod日志等。所有这些都在一个玻璃窗格内，并有简单的下钻选项。
对服务依赖性的洞察力。一个简单的方法来了解跨服务的变化，并可视化它们在整个系统中的涟漪效应。

无缝通知。与您现有的通信渠道（如Slack）直接集成，这样你就可以在需要的时候得到你需要的所有信息。

如果你有兴趣检查 Komodor，请使用此链接[注册免费试用](https://komodor.com/sign-up/)
