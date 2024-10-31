---
tag:
 - Linux
tags:
 - 基础
categories:
 - unzip
description: unzip 命令
hidden: true
---

# unzip

## 介绍
unzip 是一个解压缩工具，用于解压缩 zip 格式的压缩文件。

## 覆盖解压到指定文件夹
```shell
unzip -o yourfile.zip -d target_folder/
```
* -o 选项表示覆盖已存在的文件。
* -d 选项指定目标文件夹路径。