---
title: 查询所有数据库
categories:
 - 数据库
 - DataBases
description: 关系型数据库-查询所有数据库
---
# 关系型数据库-查询所有数据库
mysql:

```sql
show databses;
```

sql server

```sql
SELECT name FROM sys.databases;
```

oracle:

```sql
SELECT * FROM v$database;
```

PostgreSQL:

```sql
SELECT datname FROM pg_database WHERE datistemplate = false;
```

