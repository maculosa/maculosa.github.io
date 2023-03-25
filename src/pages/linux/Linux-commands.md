---
title: Linux -- 常用命令

---



# Linux 之常用命令

## 1. tree

tree命令 - 忽略某个文件夹的内容

**小技巧**

- 向 文件中添加 目录

```bash
tree -I "node_modules" >> README.md
```

## 2. scp

用来远程拷贝文件

```bash
# 复制文件
scp port [file] user@ip:[file]
# 复制文件夹
scp -r port [dir] user@ip:[dir]
```

## 3. ssh

采用 非对称性加密方式，公钥加密，私钥解密
公司电脑配置了自己服务器的免密登录

- **免密码登录远程服务器**

```bash
ssh-keygen # 生成密钥
# 将公钥存到远程服务器中
ssh-copy-id user@remote  # user: 远程服务器的用户名 remote 远程服务器的ip
```

- **ssh 别名配置**
  每次都输入 `ssh -p user@remote`, 时间久了会觉得很麻烦，特别是当 `user`, `remote` 和 `port` 都得输入，而且还不好记忆。
  而 **配置别名**可以让我们进一步偷懒，譬如用: `ssh archlinux` 来代替上面一长串，那么就在 `~/.ssh/config` 里面追加以下内容：

```bash
Host archlinux
    HostName ip地址
    User itheima
    Port 22
```

**保存之后, 即可用 `ssh archlinux` 实现远程登录了， `scp` 同样可以使用**
