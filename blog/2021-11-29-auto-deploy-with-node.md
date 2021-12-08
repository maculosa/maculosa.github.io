---
# draft: true
date: 2021-11-29T14:20:32+08:00
title: "前端自动部署项目之 node.js"
description : "使用 node.js 实现项目的自动部署"
slug : "front-end automated deployment project for node.js"
authors : "Banmao"
tags: ["前端", "自动部署", "前端部署", "deploy", "publish", "shell"]
categories : ["Workflow"]
externalLink : ""
series : []
---

上一篇中讲到如果通过 `Shell` 实现前端项目的自动部署，还是存在缺点：
1. 在没有配置 ssh 密钥的前提下，在部署项目还是需要在 terminal 中进行输入密码。
2. 对于不熟悉 `Shell` 脚本语言的同学来讲，可能并不是很友好。
如果你是前端开发者，或者你是前端爱好者或者你了解 Node.js，完全可以通过 Node.js 实现该自动部署功能。

**实现思路：**
实现的思路和上篇中的思路一样，首先，构建前端静态资源文件，然后，将构建的前端静态资源文件上传到服务器指定目录，最后配置相关的 Nginx 服务即可。

## 实现

在开始前，我默认你已经了解 Node.js、Linux 基本操作命令，包括 `SCP`，`SSH`等。接下来，我们就来手动实现该自动化部署脚本工具。


**准备工作**

```zsh
$ pnpm add scp2 ssh2 ora@^3.3.0 chalk -D
$ # 也可使用 npm 或 yarn 进行安装下载
```

1. 在项目跟目录创建目录文件夹 `scripts`:

```zsh
$ cd yourproject
$ mkdir scripts
```

2. 在 `scripts` 创建 `deploy.js`:

```zsh
$ vim deploy.js
```

3. 输入如下内容：

```js
const server = {
  host: 'xxx.xxx.xxx.xxx', // 服务器ip
  port: '22', // 服务器开发可执行上传文件的端口，默认为 22
  username: 'username', // 服务器端用户名
  password: 'password', // 服务器端密码
  pathName: 'project_path', // 服务器端指定项目路径名
  localPath: './dist' // 本地构建生成的前端静态文件路径，vue 和 react 默认均为 dist 目录
};

// scp2，纯js 实现的 远程文件拷贝命令，用户上传文件
const client = require('scp2');

// ora 安装 3.3.0, 用于发布过程中命令行的加载动画
const ora = require('ora');

// 用户显示不同的文字提示颜色
const chalk = require('chalk');

// 开启命令执行动画
const spinner = ora('正在发布到服务器...').start();

// 调用 ssh，并建立与远程服务器之间的连接
// ssh2 可以实现连接服务器时，携带密码，避免手动干预
const Client = require('ssh2').Client;
const conn = new Client();

console.log('正在建立连接');
conn
  .on('ready', function() {
    if (!server.pathName) {
      console.log('连接已关闭');
      conn.end();
      return false;
    }

    // 执行清空服务器中项目内文件，
    conn.exec(`rm -rf ${server.pathName}/*`, function(err, stream) {
      console.log('删除文件');
      if (err) throw err;

      // 删除成功后，关闭 SSH，执行 scp 上传
      stream
        .on('close', function(code, signal) {
          console.log('开始上传');
          spinner.start();
          client.scp(
            server.localPath,
            {
              host: server.host,
              port: server.port,
              username: server.username,
              password: server.password,
              path: server.pathName
            },
            function(err) {
              spinner.stop();
              if (!err) {
                console.log(chalk.green('项目部署完毕！'));
              } else {
                console.log(chalk.red('发布失败.\n'));
              }
            }
          );

          conn.end();
        })
        .on('data', function(data) {
          console.log('STDOUT: ' + data);
        })
        .stderr.on('data', function(data) {
          console.log('STDERR: ' + data);
        });
    });
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password
  });

```
