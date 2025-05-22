---
tag:
  - 数据库
  - DataBases
tags:
  - Mysql
categories:
  - mysql
sidebar: true
description: like关键字
---
# 备份/恢复
### 一、备份

1. mysqldump：逻辑备份
    ```bash
    #
    备份整个数据库
    mysqldump -h XXX.XXX.XXX.XXX -P 3306 -u root -p --all-databases > all_backup.sql
    
    # 备份单个数据库
    mysqldump -h XXX.XXX.XXX.XXX -P 3306 -u root -p mydb > mydb_backup.sql
    
    # 备份指定表
    mysqldump -h XXX.XXX.XXX.XXX -P 3306 -u root -p mydb table1 table2 > table_backup.sql
    ```

2. mysqlpump：多线程版本的 mysqldump
     ```bash
    mysqlpump -h XXX.XXX.XXX.XXX -P 3306- -u root -p --default-parallelism=4 mydb > mydb_pump.sql
    ```

### 二、恢复

1. 使用 SQL 文件恢复（适用于 mysqldump/mysqlpump）
   ```bash
   mysql -u root -p < all_backup.sql
   ```