---
categories:
 - 数据库
 - DataBases
sidebar: true
description: 切换数据库
---
# 切换数据库
oracle:

```sql
ALTER SESSION SET CURRENT_schema =schema_name;
```

sql server:

```sql
use database_name;
```

Mysql:

```sql
use database_name;
```

PostgreSQL：

```sql
set search_path=database_name.schema_name
```

