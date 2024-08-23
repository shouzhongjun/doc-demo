---
description: Python&Golang读取YAML文件的方法
---


# Python&Golang读取YAML嵌套文件

`main.yaml` 文件：

```yaml
resources:
  - $ref: other.yaml
```

`other.yaml` 文件：

```yaml
name: John
age: 30
```

在这个示例中，`main.yaml` 引用了 `other.yaml` 文件，`other.yaml` 文件包含一个名为 John，年龄为 30 的人的信息。

## Python读取YAML嵌套文件示例代码

```python
import yaml

# 定义Person结构体
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# 读取YAML文件
with open("main.yaml", "r") as f:
    data = yaml.safe_load(f)

# 解析YAML文件
for resource in data["resources"]:
    # 如果节点是Person类型
    if resource.get("$ref"):
        # 读取被引用的YAML文件
        with open(resource["$ref"], "r") as f:
          
            person_data = yaml.safe_load(f)

        # 将读取到的数据转换为Person对象
        person = Person(person_data["name"], person_data["age"])

        # 输出结果
        print("Person: name={}, age={}".format(person.name, person.age))
```

## Go语言读取YAML嵌套文件示例代码

```go
package main

import (
	"fmt"
	"io/ioutil"

	"gopkg.in/yaml.v3"
)

// 定义Person结构体
type Person struct {
	Name string `yaml:"name"`
	Age  int    `yaml:"age"`
}

// 定义Config结构体
type Config struct {
	Resources []struct {
		Ref string `yaml:"$ref"`
	} `yaml:"resources"`
}

func main() {
	// 读取YAML文件
	data, err := ioutil.ReadFile("main.yaml")
	if err != nil {
		panic(err)
	}

	// 解析YAML文件
	var config Config
	err = yaml.Unmarshal(data, &config)
	if err != nil {
		panic(err)
	}

	// 处理资源
	for _, resource := range config.Resources {
		// 如果节点是Person类型
		if resource.Ref != "" {
			// 读取被引用的YAML文件
			data, err := ioutil.ReadFile(resource.Ref)
			if err != nil {
				panic(err)
			}

			// 解析YAML文件
			var person Person
			err = yaml.Unmarshal(data, &person)
			if err != nil {
				panic(err)
			}

			// 输出结果
			fmt.Printf("Person: name=%s, age=%d\n", person.Name, person.Age)
		}
	}
}
```

以上两个示例代码都可以读取包含引用其他YAML文件的主YAML文件，并将其解析为Go语言或Python中的结构体。如果主文件中引用了其他文件，它们将自动被加载并合并到主文件中，可以像处理普通YAML文件一样读取和处理它们。