---
tag:
  - 数据库
  - DataBases
tags:
  - oracle
categories:
  - oracle
sidebar: true
description: Apple silicon芯片(ARM架构芯片)配置oracle instant client 监听器，连接oracle11g数据库
title: Apple silicon芯片(ARM架构芯片)连接oracle数据库
---

# 步骤
## 1. 下载oracle instant client：
### 1.1 [下载地址](https://www.oracle.com/database/technologies/instant-client/macos-arm64-downloads.html)
### 1.2 分别下载`Basic Package (dmg)`和`SQL*Plus Package (dmg)`文件

### 2. 安装方式
### 2.1 双击打开下载的*.dmg文件
#### 2.1.1 打开终端，使用命令 `cd /Volumes/instantclient_23_3` 进入安装目录
#### 2.1.2 使用命令`./install_ic.sh`安装
#### 2.1.3 进入到下载目录，复制文件夹`instantclient_23_3`到`任意目录`，例如`/opt/databases/instantclient_23_3`
#### 2.2 配置监听器
#### 2.2.1 进入到`/opt/databases/instantclient_23_3/network/admin`目录
#### 2.2.2 创建`tnsnames.ora`文件，添加以下内容
```shell
ORCL =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST =192.168.3.12)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = orcl)
    )
    )
```
### 2.3 创建`sqlnet.ora`文件，添加以下内容
```shell
NAMES.DIRECTORY_PATH= (TNSNAMES, EZCONNECT)
```
## 3. 安装`sqlplus`
### 1.1 安装方式
#### 3.1.1 双击打开下载的*.dmg文件，先删除`Download文件夹下的instantclient_23_3`文件夹
#### 3.1.2 打开终端，使用命令`cd /Volumes/instantclient_23_3`进入安装目录
#### 3.1.3 使用命令`./install_ic.sh`安装
### 3.2 进入到`instantclient_23_3`，复制所有文件到`/opt/databases/instantclient_23_3`目录
## 4. 配置环境变量
### 4.1 打开终端，使用命令`vim ~/.zshrc`打开文件
#### 4.1.1 在文件末尾添加以下内容
::: details 点我查看代码
```shell
export ORACLE_HOME=/opt/databases/instantclient_23_3
export DYLD_LIBRARY_PATH=$ORACLE_HOME
export PATH=$ORACLE_HOME:$PATH
```
:::
#### 4.1.2 保存退出，使用命令`source ~/.zshrc`使配置生效


## 5. 测试连接
### 5.1 打开终端，使用下面的命令连接数据库：
```bash
sqlplus username/password@ORCL
```
### 5.2 输入下面的sql，查看版本信息：
```sql
select * from v$version;
```

## 6.Python连接
### 6.1 安装`oracledb`库
```shell
pip install oracledb
```
### 6.2 连接数据库
::: details 点我查看代码
```python
import oracledb

# 初始化 Oracle 客户端（Thick 模式）
oracledb.init_oracle_client(lib_dir="/opt/development/database_tools/oracle/instantclient_23_3/") # 低版本的oracle数据库需要指定lib_dir
# 配置 Oracle 数据库连接信息
username = "user"  # Oracle 用户名
password = "password"  # Oracle 密码
dsn = "192.168.3.12:1521/orcl"  # 数据库的连接描述符，例如"localhost:1521/orclpdb1"
connection = None
try:
    # 连接到 Oracle 数据库
    connection = oracledb.connect(user=username, password=password, dsn=dsn)
    print("Connected to Oracle Database")

    # 执行查询
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM DEPT")
        for row in cursor:
            print(row)

except oracledb.DatabaseError as e:
    print(f"Error connecting to Oracle Database: {e}")

finally:
    if connection:
        connection.close()
        print("Disconnected from Oracle Database")
```
:::
## 7. 注意事项
### 7.1 如果连接数据库时报错：
`ORA-12541: TNS:no listener`，则需要检查`tnsnames.ora`文件中的`HOST`是否正确
### 7.2 如果连接数据库时报错：
`ORA-12170: TNS:Connect timeout occurred`，则需要检查`tnsnames.ora`文件中的`HOST`是否正确
### 7.3 如果连接数据库时报错：
`ORA-12514: TNS:listener does not currently know of service requested in connect descriptor`，则需要检查`tnsnames.ora`文件中的`SERVICE_NAME`是否正确
### 7.4 如果连接数据库时报错：
`DPY-3010: connections to this database server version are not supported by python-oracledb in thin mode`，则需要使用`Thick 模式`连接数据库，即使用`oracledb.init_oracle_client(lib_dir="/opt/development/database_tools/oracle/instantclient_23_3/")`初始化 Oracle 客户端

## 8.参考
[Oracle Instant Client for Apple Silicon M1](https://www.oracle.com/database/technologies/instant-client/macos-arm64-downloads.html)

