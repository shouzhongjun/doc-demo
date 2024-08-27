---
categories:
 - 数据库
 - DataBases
sidebar: true
description: 数据库索引
---
# 数据索引管理

1. 创建索引

   ```sql
   1.添加主键索引 
   ALTER TABLE `table_name` ADD PRIMARY KEY (`column`) 
   
   2.添加唯一索引
   ALTER TABLE `table_name` ADD UNIQUE (`column`) 
   
   3.添加全文索引
   ALTER TABLE `table_name` ADD FULLTEXT (`column`) 
   
   4.添加普通索引
   ALTER TABLE `table_name` ADD INDEX index_name (`column` ) 
   
   5.添加组合索引 
   ALTER TABLE `table_name` ADD INDEX index_name (`column1`, `column2`, `column3`)
   ```

2. 查看索引

   ```sql
   show index from tablename;
   ```

3. 删除索引

   ```sql
   drop index indexname on tablename;
   ```

   

