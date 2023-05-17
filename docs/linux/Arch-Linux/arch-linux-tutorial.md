---
title: 'Arch Linux 安装教程'
authors: 'Banmao'
date: '2021-12-09'
---

## 1. 预安装

### 制作启动U盘

[下载 Arch Linux 系统镜像](https://archlinux.org/download/) https://archlinux.org/download/

在 Windows 使用 [Rufus](https://rufus.ie/zh/) 制作启动盘 

### 验证启动模式

从 USB 进入 Live 环境，然后验证你的机器的启动模式是 UEFI 还是 BIOS：

```bash
ls /sys/firmware/efi/efivars
```

### 连接网络

#### 有线网络 

直接连接

```bash
dhcpcd
```

#### 无线网络

Arch Linux 默认使用 iwctl 对无线网络进行身份验证。

1. 在终端中输入 `iwctl` 进入 iwd 提示符：

   ```
   iwctl
   ``**https://cme.91huayi.com**`

2. 如果不知道无线设备名称，在 [iwd#] 输入 `device list` 查询机器的网卡设备。

   ```
   [iwd]# device list
   ```

3. 搜索无线网络

   ```
   [iwd]# station <device> scan
   ```

4. 列出所有可用的无线网络

   ```
   [iwd]# station <device> get-networks
   ```

5. 最后连接网络

   ```
   [iwd]# station <device> connect <wifi-SSID>
   ```

使用 `ping archlinux.org` 验证网络是否连接成功

> **Tips:** `<device>` 所指的是 指令`device list` 所列出可用的网卡设备

### 更新系统时间

```bash
timedatectl set-ntp true
```

使用 `timedatectl status` 验证系统时间

### 硬盘分区

当被 live 系统识别时，磁盘被分配给一个 `block device` ，例如 `/dev/sda` 、`/dev/nvme0n1` 或 `/dev/mmcblk0` 。要识别这些设备，需要使用 `lsblk` 或 `fdisk` 。查看磁盘设备：

```bash
fdisk -l
```

使用 `fdisk` 或者 `cfdisk` 创建分区。创建的分区必须包含以下两点：

- 包含一个 root 分区 `/`
- 在 UEFI 模式下启动：一个 EFI 系统分区。

| 挂载点   | 分区类型        | 建议大小  |
| -------- | --------------- | --------- |
| /mnt/efi | EFI system 分区 | 至少 260M |
| [SWAP]   | Swap 分区       | 超过 512M |
| /mnt     | Root 分区       | 剩余大小  |

#### 格式化分区

按照上面的分区建议分区完成之后，我们需要将每个分区用对应的文件系统进行格式化。

对于 root 分区直接使用 `ext4` 文件系统进行初始化：

```
mkfs.ext4 /dev/sda3
```

如果你也创建了 swap 分区，需要使用 `mkswap` 对其进行初始化。

```bash
mkswap /dev/sda2
swapon /dev/sda2
```

 如果你的电脑是 UEFI 启动模式的话，则还需要对 EFI 系统分区进行初始化：

```
mkfs.fat -F32 /dev/sda1
```

### 挂载分区

挂载 `root` 分区：

```bash
mount /dev/sda2 /mnt
```

挂载 efi 分区

```bash
mkdir /mnt/efi
mount /dev/sda1 /mnt/efi
```

> swap 分区不需要挂载分区，在上面格式化交换分区时，已经开启了。



## 2. 正式安装

### 选择镜像

Arch Linux 所有的软件包都需要从 镜像服务器中下载。镜像源列表在 `/etc/pacman.d/mirrorlist` 文件中。

### 安装必要的软件包

```bash
pacstrap /mnt base linux linux-firmware linux-headers base base-devel vim git bash-completion
```

等待安装完成，到此，理论上系统已经完成了安装，但是还是无法正常使用，需要进行配置才能正常使用。

### 配置系统

**Fstab** 生成 `fstab` 文件：

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

**Chroot** 进入到安装的系统

```bash
arch-chroot /mnt
```

**Time zone** 设置系统时区

```bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

运行 hwclock 生成 `/etc/adjtime`：

```bash
hwclock --systohc
```

**安装文本编辑器**

因在新版系统没有内置文本编辑器，需要手动安装文本编辑器，这里安装vim：

```bash
pacman -S vim
```

不喜欢 vim 的同学，可以安装 nano，安装方法同上。

**本地化设置**

```bash
vim /etc/locale.gen
```

将需要的地区的注释移除，建议将 `en_US.UTF-8` 和 `zh_CN.UTF-8` 都取消注释。

运行：

```bash
locale-gen
```

创建 `locale.conf` 文件，并设置 LANG 变量：

```bash
vim /etc/locale.conf
```

```
LANG=en_US.UTF-8
```

 **网络配置**

创建 `hostname` 文件：

```bash
vim /etc/hostname
```

```
myhostname
```

> myhostname 可换成自己想要的名字即可。

**添加 hosts**

```
vim /etc/hosts-------------------------127.0.0.1		localhost::1				localhost127.0.0.1		myhostname.localdomain	myhostname
```

> 如果你的系统有一个永久地址，使用这个永久地址替换上述的 `127.0.0.1`。

**设置 Root 密码**

```bash
passwd
```

**安装引导程序**

```bash
pacman -S grub efibootmgr efivar intel-ucode
```

将引导程序安装到系统中：

```bash
grub-install --target=x86_64-efi --efi-directory=/efi --bootloader-id=ArchLinux
```

生成grub 配置文件，开启 microcode 更新：

```
grub-mkconfig -o /boot/grub/grub.cfg
```

#### 安装网络管理工具

到目前为止，系统已经安装完成，但是新系统中并不包含网路管理工具。

```bash
pacman -S iwd dhcpcd
```

安装完成后，退出 chroot、重启：

```bash
exitreboot
```

## 安装后的配置

### 连接网络

连接网络前，需要启动 `iwd` 服务，并设置为开机自启动

```bash
systemctl start iwd.service # 启动服务systemctl enable iwd.service # 开机自启动 iwd 服务
```

**启用 systemd 提供的 DNS 解析服务**：

```bash
systemctl start systemd-resolved.servicesystemctl enable systemd-resolved.service
```

**启动 dhcpcd** ：

```bash
systemctl start dhcpcdsystemctl enable dhcpcd
```

执行 `iwctl`

```bash
dhcpcd
```

### 安装显示服务

```bash
pacman -S xorg
```

### 安装显卡驱动

```bash
pacman -S xf86-video-intel  # intel 核显pacman -S mesa xf86-video-nouveau  # NVIDIA 独显
```

### 安装桌面环境

```bash
pacman -S xfce4
```

### 安装显示管理器

由于`xfce4`包里没有显示管理器(DM)，所以还需要自己选择一个DM进行安装，这里选择的是`lightdm`：

```bash
pacman -S lightdm lightdm-gtk-greeter
```

编辑 `/etc/lightdm/lightdm.conf` 设置 `lightdm-gtk-greeter` 为默认的 greeter：

```
[Seat:*]...greeter-session=lightdm-gtk-greeter...
```

**设置为开机自启动**

```bash
systemctl enable lightdm.service
```

### 添加普通用户

```bash
useradd -m -G wheel username
```

> username 替换为自己的用户名

```bash
passwd username
```

**安装 sudo**

```bash
pacman -S sudo
```

在 `/etc/sudoers` 文件中 在  `root ALL=(ALL) ALL` 行下添加 `username ALL=(ALL) ALL` 

```
...root ALL=(ALL) ALLusername ALL=(ALL) ALL...
```

好了，现在可以正式体验 Arch Linux 了。



[参考资料：https://wiki.archlinux.org/title/Installation_guide]

[参考资料：https://zhuanlan.zhihu.com/p/157260502]



