---
title: Docker 中如何安装 MariaDB
authors: Liu Qingfeng
tags: ["docker", "mariadb"]
footer: false
---

## 1. Docker 版本

```zsh
$ docker -v
```

## 2. 拉取镜像

我们可以直接拉取，也可以先看看有哪些MariaDB的镜像

```zsh
$ docker search mariadb
```

**拉取镜像**

```zsh
$ docker pull mariadb
```

## 3. 创建容器、启动 MariaDB

```zsh
$ docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 --name mariadb -d mariadb
```

## 4. 查看正在运行的容器

```zsh
$ docker ps
```

## 5. 让 MariaDB 自动启动

```zsh
$ docker container update --restart=always mariadb
```

## 6. 进入容器

```zsh
$ docker exec -it mariadb bash
```

## 7. 在容器内登录数据库

```zsh
$ mysql -u root -p

# 或者

$ mysql -u root -p 密码
```

## 8. 查看新创建的 MariaDB 中所有的数据库

```mysql
show databases;
```
