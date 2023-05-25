---
title: Empty all commit records in Git
date: 2022-04-06T14:49:11+08:00
slug: empty-all-commit-records-in-git
author: Liu Qingfeng
tags: ["Git"]
categories: ["Git"]
---

最近在管理项目时，遇到了这样一个问题：

> 需要把一个项目复制一个分支，但是该分支是全新的，没有之前的 commit 信息。

```bash
git checkout --orphan main

git add -A

git commit -am "commit message"

git branch -D master
```

