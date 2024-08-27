---
categories:
 - 数据库
 - DataBases
sidebar: true
description: 在SQL中，`IN`和`ON`是两个不同的关键词，用于不同的场景。
---

# 表连接：IN vs ON


#### 解释说明

在SQL中，`IN`和`ON`是两个不同的关键词，用于不同的场景。

1. **`IN`关键词**：

   - **用途**：`IN`关键词用于在`WHERE`子句中指定一个条件，检查某个字段的值是否在给定的值列表中。

   - **示例**：假设你有一个`users`表，其中有一个字段是`age`，你想选择所有年龄为25、30和35的用户，你可以这样使用`IN`关键词：

     ```sql
     SELECT * FROM users WHERE age IN (25, 30, 35);
     ```

   - **优点**：`IN`适用于静态值列表，例如你已经知道要检查的特定值。

2. **`ON`关键词**：

   - **用途**：`ON`关键词通常用于`JOIN`操作中，在连接两个表时指定连接条件。

   - **示例**：假设你有两个表`users`和`orders`，你想根据用户ID连接这两个表，并获取用户的订单信息，你可以这样使用`ON`关键词：

     ```sql
     SELECT users.*, orders.order_id
     FROM users
     INNER JOIN orders
     ON users.user_id = orders.user_id;
     ```

   - **优点**：`ON`关键词适用于动态连接条件，例如基于两个表的特定字段进行关联。
#### 总结：
> `IN`关键词用于在`WHERE`子句中指定值列表的条件，而`ON`关键词用于在`JOIN`操作中指定连接条件。它们的用途和场景不同，需要根据具体情况进行选择和使用。