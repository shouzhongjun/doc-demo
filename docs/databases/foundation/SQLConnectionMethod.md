---
categories:
 - 数据库
 - DataBases
sidebar: true
description: 在SQL中，连接（Join）是用来将两个或多个表中的数据合并在一起的操作。有几种不同类型的连接，它们的区别在于如何匹配表中的行和返回结果。
---

# SQL中的连接类型

在SQL中，连接（Join）是用来将两个或多个表中的数据合并在一起的操作。有几种不同类型的连接，它们的区别在于如何匹配表中的行和返回结果。

以下是SQL中常见的连接方式及其区别：

1. **内连接（Inner Join）**：

   - 只返回匹配条件下两个表中共有的行。
   - 如果两个表中没有匹配的行，则不返回任何结果。

   语法示例：

   ```sql
   SELECT *
   FROM table1
   INNER JOIN table2 ON table1.column = table2.column;
   ```

2. **左连接（Left Join）**：

   - 返回左表中的所有行，以及右表中与左表匹配的行。
   - 如果右表中没有匹配的行，则以NULL值填充右表中的列。

   语法示例：

   ```sql
   SELECT *
   FROM table1
   LEFT JOIN table2 ON table1.column = table2.column;
   ```

3. **右连接（Right Join）**：

   - 返回右表中的所有行，以及左表中与右表匹配的行。
   - 如果左表中没有匹配的行，则以NULL值填充左表中的列。

   语法示例：

   ```sql
   SELECT *
   FROM table1
   RIGHT JOIN table2 ON table1.column = table2.column;
   ```

4. **全连接（Full Join）**：

   - 返回左表和右表中的所有行，并将它们合并在一起。
   - 如果某个表中没有匹配的行，则以NULL值填充相应的列。

   语法示例：

   ```sql
   SELECT *
   FROM table1
   FULL JOIN table2 ON table1.column = table2.column;
   ```

这些连接类型在处理数据时具有不同的逻辑和效果。根据实际需求和数据结构，选择合适的连接类型来获取所需的结果。