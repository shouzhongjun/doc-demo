---
tag:
 - 数据库
 - DataBases
tags:
 - Mysql
categories:
 - postgresql
sidebar: true
description: postgresql数据库
hidden: true
---

# 这里是Postgresql数据库
## 1. Postgresql简介
PostgreSQL是一种开放源码的，功能强大的对象关系数据库管理系统，PostgreSQL是PostgreSQL基金会（PostgreSQL Foundation）的注册商标。
## 2. Postgresql安装
### 2.1. Postgresql安装
```shell
sudo apt-get install postgresql
```
### 2.2. Postgresql配置
```shell
sudo -u postgres psql
```
### 2.3. Postgresql启动
```shell
sudo service postgresql start
```
### 2.4. Postgresql停止
```shell
sudo service postgresql stop
```
### 2.5. Postgresql重启
```shell
sudo service postgresql restart
```
### 2.6. Postgresql状态
```shell
sudo service postgresql status
```
## 3. Postgresql基本操作
### 3.1. Postgresql登录
```shell
sudo -u postgres psql
```
### 3.2. Postgresql退出
```shell
\q
```
### 3.3. Postgresql创建用户
```shell
create user username with password 'password';
```
### 3.4. Postgresql删除用户
```shell
drop user username;
```
### 3.5. Postgresql创建数据库
```shell
create database dbname;
```
### 3.6. Postgresql删除数据库
```shell
drop database dbname;
```
### 3.7. Postgresql查看数据库
```shell
\l
```
### 3.8. Postgresql查看表
```shell
\dt
```
### 3.9. Postgresql查看表结构
```shell
\d tablename
```
### 3.10. Postgresql查看用户
```shell
\du
```
### 3.11. Postgresql查看用户权限
```shell
\dp
```
### 3.12. Postgresql修改用户密码
```shell
alter user username with password 'password';
```
### 3.13. Postgresql赋予用户权限
```shell
grant all privileges on database dbname to username;
```
### 3.14. Postgresql撤销用户权限
```shell
revoke all privileges on database dbname from username;
```
### 3.15. Postgresql导入数据
```shell
psql -U username -d dbname < filename.sql
```
### 3.16. Postgresql导出数据
```shell
pg_dump -U username -d dbname > filename.sql
```
### 3.17. Postgresql备份数据库
```shell
pg_dump dbname > filename.sql
```
### 3.18. Postgresql恢复数据库
```shell
psql dbname < filename.sql
```
### 3.19. Postgresql修改表名
```shell
alter table tablename rename to new_tablename;
```
### 3.20. Postgresql删除表
```shell
drop table tablename;
```
### 3.21. Postgresql删除表中数据
```shell
delete from tablename;
```
### 3.22. Postgresql插入数据
```shell
insert into tablename values(value1, value2, ...);
```
### 3.23. Postgresql更新数据
```shell
update tablename set column1=value1, column2=value2, ... where condition;
```
### 3.24. Postgresql删除数据
```shell
delete from tablename where condition;
```
### 3.25. Postgresql查询数据
```shell
select * from tablename;
```
## 4. Postgresql常见问题
### 4.1. Postgresql远程连接
```shell
vim /etc/postgresql/9.5/main/postgresql.conf
```
```shell
listen_addresses = '*'
```
```shell
vim /etc/postgresql/9.5/main/pg_hba.conf
```
```shell
host    all             all      0.0.0.0/0       md5 
```
```shell
sudo service postgresql restart
```
### 4.2. Postgresql修改端口
```shell
vim /etc/postgresql/9.5/main/postgresql.conf
```
```shell
port = 5432
```
```shell
sudo service postgresql restart
```
### 4.3. Postgresql修改数据目录
```shell
vim /etc/postgresql/9.5/main/postgresql.conf
```
```shell
data_directory = '/var/lib/postgresql/9.5/main'
```
```shell
sudo service postgresql restart
```
### 4.4. Postgresql修改用户密码
```shell
sudo -u postgres psql
```
```shell
alter user postgres with password 'password';
```
### 4.5. Postgresql修改用户权限
```shell
sudo -u postgres psql
```
```shell
grant all privileges on database dbname to username;
```
### 4.6. Postgresql查看日志
```shell
vim /var/log/postgresql/postgresql-9.5-main.log
```
### 4.7. Postgresql查看版本
```shell
psql -V
```
## 5. Postgresql常用命令
### 5.1. Postgresql查看版本
```shell
psql -V
```
### 5.2. Postgresql查看帮助
```shell
psql --help
```

## 6. Postgresql常用配置
### 6.1. Postgresql配置文件
```shell
vim /etc/postgresql/9.5/main/postgresql.conf
```
### 6.2. Postgresql日志文件
```shell
vim /var/log/postgresql/postgresql-9.5-main.log
```
### 6.3. Postgresql数据目录
```shell
/var/lib/postgresql/9.5/main
```
### 6.4. Postgresql命令目录
```shell
/usr/lib/postgresql/9.5/bin
```
### 6.5. Postgresql配置文件目录
```shell
/etc/postgresql/9.5/main
```
### 6.6. Postgresql启动文件目录
```shell
/etc/init.d/postgresql
```
### 6.7. Postgresql服务目录
```shell
/etc/postgresql/9.5/main
```
### 6.8. Postgresql日志目录
```shell
/var/log/postgresql
```
### 6.9. Postgresql数据目录
```shell
/var/lib/postgresql/9.5/main
```

## 7. Postgresql常用函数
### 7.1. Postgresql字符串函数
```shell
select length('hello');
```
### 7.2. Postgresql数学函数
```shell
select abs(-1);
```
### 7.3. Postgresql日期函数
```shell
select now();
```
### 7.4. Postgresql聚合函数
```shell
select count(*) from tablename;
```
### 7.5. Postgresql类型转换函数
```shell
select cast('1' as int);
```
### 7.6. Postgresql加密函数
```shell
select md5('hello');
```
### 7.7. Postgresql解密函数
```shell
select decrypt('hello');
```
### 7.8. Postgresql编码函数
```shell
select encode('hello', 'base64');
```
### 7.9. Postgresql解码函数
```shell
select decode('hello', 'base64');
```
### 7.10. Postgresql格式化函数
```shell
select to_char(now(), 'YYYY-MM-DD HH24:MI:SS');
```
### 7.11. Postgresql截取函数
```shell
select substring('hello', 1, 3);
```
### 7.12. Postgresql替换函数
```shell
select replace('hello', 'h', 'H');
```
### 7.13. Postgresql连接函数
```shell
select concat('hello', 'world');
```
### 7.14. Postgresql分割函数
```shell
select split_part('hello,world', ',', 1);
```
### 7.15. Postgresql转换函数
```shell
select translate('hello', 'h', 'H');
```
### 7.16. Postgresql去除空格函数
```shell
select trim(' hello ');
```
### 7.17. Postgresql左去空格函数
```shell
select ltrim(' hello ');
```
### 7.18. Postgresql右去空格函数
```shell
select rtrim(' hello ');
```
### 7.19. Postgresql大小写转换函数
```shell
select lower('HELLO');
```

## 8.常用插件
### 8.1. Postgresql插件
```shell
sudo apt-get install postgresql-contrib 
```
### 8.2. Postgresql插件目录
```shell
/usr/share/postgresql-common/pgdg
```
### 8.3. Postgresql插件配置
```shell
vim /etc/postgresql/9.5/main/postgresql.conf
```
```shell
shared_preload_libraries = 'plugin'
```
```shell
sudo service postgresql restart
```
### 8.4. Postgresql插件安装
```shell
create extension plugin;
```
### 8.5. Postgresql插件卸载
```shell
drop extension plugin;
```
### 8.6. Postgresql插件查看
```shell
select * from pg_extension;
```
### 8.7. Postgresql插件使用
```shell
select plugin();
```
### 8.8. Postgresql插件升级
```shell
alter extension plugin update;
```
### 8.9. Postgresql插件降级
```shell
alter extension plugin downgrade;
```
### 8.10. Postgresql插件删除
```shell
drop extension plugin;
```
### 8.11. Postgresql插件卸载
```shell
sudo apt-get remove postgresql-contrib
```
### 8.12. Postgresql插件清理
```shell
sudo apt-get purge postgresql-contrib
```
### 8.13. Postgresql插件重装
```shell
sudo apt-get install postgresql-contrib
```
### 8.14. Postgresql插件更新
```shell
sudo apt-get update
sudo apt-get upgrade
```
### 8.15. 常用插件
```shell
pgcrypto pg_trgm pg_stat tsm_system_time 
```