---
# draft: true
date: 2021-11-25T16:02:07+08:00
title: "前端自动部署项目之 shell"
description: "前端自动部署项目"
slug: "Front-end automated deployment project"
authors: "Banmao"
tags: ["前端", "自动部署", "前端部署", "deploy", "publish", "shell"]
categories: ["Front-end", "Deploy", "Workflow"]
externalLink: ""
series: []
---

> 最开始我在工作的日常开发和维护中，由于公司没有类似 `Jenkins` 等自动化部署的环境，经常修改完bug之后，通过 `yarn build` 构建打包，然后通过 FTP 工具上传至服务器。这样的部署方式，非常的繁琐，低效。


## 前端部署项目

要实现前端项目部署，大致思路如下：

1. 执行 `yarn build`（或 `npm run build`），构建前端静态资源文件；
2. 将构建的前端静态资源文件上传到服务器指定的目录；
3. 配置相关的 Nginx 服务。

通过上面的思路，如果你了解`Linux` 指令的话，相信你应该知道接下来应该怎么做了。`SCP`，是secure copy的缩写, `SCP` 是Linux系统下基于SSH登陆进行安全的远程文件拷贝命令。

创建 `deploy.sh`

```bash
touch deploy.sh
```

通过 `vim deploy.sh`，录入如下内容

```bash
#!/bin/bash

yarn build

scp -r ./dist/* username@xxx.xxx.xxx.xxx:/projectPath

exit 0
```

这样一个简单的自动构建部署就完成了。

因为前端项目在构建打包之后，都会产生不同 hash 值的js 和 css 文件，在执行 `deploy.sh` 文件后会产生越来越多的废弃的文件，所以可以用 `SSH` 先把远程服务器中存放静态文件删除，再上传文件。

```bash
yarn build

echo "连接远程服务器中..."
ssh username@xxx.xxx.xxx.xxx "echo '正在删除文件';rm -rf projectPath/*; echo '删除成功'; echo '正在退出远程服务器'; exit;"

echo "退出成功！"
echo "开始上传代码"

scp -r ./dist/* username@xxx.xxx.xxx.xxx/projectPath

exit 0
```
