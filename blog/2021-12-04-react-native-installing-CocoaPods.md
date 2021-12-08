--- 
date : 2021-12-04T22:37:38+08:00
title : "解决 React Native 运行ios失败的问题"
description : "ios 运行失败"
slug : "resolve react native run ios failure issue"
authors : "Banmao"
tags : ["React Native", "RN", "ios"]
categories : ["react native"]
externalLink : ""
series : ["React Native"]
---

在安装 React Native 官网进项配置环境和初始化项目时，总是卡在Installing CocoaPods Dependencies，然后安装失败。

### 开发环境

- macOS

### 初始化 RN 项目

```bash
$ npx react-native init AwesomeProject
```

第一次安装，卡在 Installing CocoaPods Dependencies，由于国内环境无法安装，因此此时直接关闭，手动进行 CocoaPods Dependencies 的安装。

### 配置 Pod 镜像源

在安装前先确认 gems 镜像源

```bash
gem sources -l
```

如果没有切换到国内镜像源先添加国内镜像源，

```bash
gem sources --add https://gems.ruby-china-com/ --remove https://rubygems.org/
```

再次使用上述命令进行验证

```bash
gem sources -l
```

实例如下：

```bash
➜  ~ gem sources -l
*** CURRENT SOURCES ***

https://gems.ruby-china.com/
```

那么到现在，cocoaPods 依赖镜像已经设置好了，就需要进行镜像源的切换：

```bash
$ pod repo # 查看

$ cd ~/.cocoapods/repos # 切换到目录

$ repos pod repo remove master # 删除旧版的 master 或者 trunk，保证你当前有且只有一个源

$ git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master

$ pod repo remove trunk # 如果有源，就删除 trunk
```

### 项目配置

切换到最开始我们初始化的项目当中，切换到 `ios` 目录下，这里有一个 `Podfile` 的文件，把下面的这一行代码放到该文件的第一行中

```bash
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
```

然后在命令行进入到 `ios` 目录下，执行 `pod install`，等待安装完成。安装结果如下：

```bash
Generating Pods project
Integrating client project
 
[!] Please close any current Xcode sessions and use `firstApp.xcworkspace` for this project from now on.
Pod installation complete! There are 33 dependencies from the Podfile and 37 total pods installed.
appledeMacBook-Pro:ios apple$ 
```

### 运行项目

```bash
cd AwesomeProject
yarn ios
```

### 总结

本文针对在 macOS 下，国内环境无法正常通过 `yarn ios` 运行项目，提供的一种解决方案。

```bash
$ gem sources -l # 确认 gem 镜像源
$ gem sources --add https://gems.ruby-china.com/ # 添加国内镜像源，这里选用 https://gems.ruby-china.com
$ pod repo # 查看 cocoaPods 是否安装好了
$ cd ~/.cocoapods/repos # 切换到目录
$ repos pod repo remove master # 删除旧版的 master
$ git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
$ pod repo remove trunk

$ cd AwesomeProject
$ vim ios/Podfile # 编辑文件，写入下行代码

$ source 'https://mirrors/tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'

$ # 退出 Vim
$ cd ios && pod install # 安装 cocoaPods 依赖，等待安装成功回到项目根目录

$ cd ..

$ yarn ios
```


本文参考：
1. [React Native 官方教程](https://reactnative.dev/docs/environment-setup)
2. [初始化React-Native项目,卡在Installing CocoaPods Dependencies](https://www.jianshu.com/p/412d760bcacd)