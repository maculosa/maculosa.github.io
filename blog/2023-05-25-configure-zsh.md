---
title: 配置一个简洁，高效的zsh
authors: unknown
---

> shell 是类 Unix 系统中工具，而zsh是shell中的佼佼者。现在将我的方案分享给大家，教大家配置一个高效的zsh。


## 安装 zsh

我的主力电脑是 MacBook Pro 和 Arch Linux。主要介绍 Arch Linux

### Arch Linux 安装 zsh

终端：

```zsh
sudo pacman -Sy zsh
```

## 安装插件

我只需要两个插件：

- zsh-autosuggestion 这个是自动建议插件，能够自动提示你需要的命令。
- zsh-syntax-highlighting 这个是代码高亮插件，能够使你的命令行各个命令清晰明了。

还有一个主题：
- zsh-theme-powerlevel10k 这个主题提供漂亮的prompt，可以显示当前路径，显示时间，显示命令执行成功与否，还能够支持 git 分支显示等等。

### 安装插件和主题

终端：

```zsh
sudo pacman -S zsh-autosuggestions zsh-syntax-highlighting zsh-theme-powerlevel10k zsh-completions
```

## 更改默认的 shell，并配置插件和主题

安装好了之后就是启用 zsh，并配置插件和主题了。

### 更改默认的shell

终端：

```zsh
chsh -s /usr/bin/zsh
```


### 配置插件和主题

zsh的配置文件是`~/.zshrc`文件，这个文件在你的用户目录下`~/`。删掉了这个文件，再次进入zsh，又会触发zsh的配置界面。

打开`~/.zshrc`文件，将以下行代码添加到其中：

```zsh
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme
```

这样就成功的启用了插件和主题，插件不需要额外的配置就很好用，有额外配置需求的可以自行研究。
而 `powerlevel10k` 主题在首次进入时，会触发一个配置界面。

配置完成后，就可以愉快的使用啦！
