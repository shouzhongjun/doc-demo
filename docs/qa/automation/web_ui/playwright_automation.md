---
sticky: 999
top: 1

tag:
 - 测试
tags:
 - Playwright
categories:
 - 自动化
description: 当基于Playwright搭建自动化测试框架时，可以按照以下最佳实践来组织项目结构
---

# 基于playwright自动化测试项目结构



当基于Playwright搭建自动化测试框架时，可以按照以下最佳实践来组织项目结构：

```
├── config
│   ├── config.yaml
│   └── environments
│       ├── dev.yaml
│       └── prod.yaml
├── pages
│   ├── base_page.py
│   └── page_objects
│       ├── home_page.py
│       └── search_results_page.py
├── tests
│   ├── conftest.py
│   ├── test_cases
│   │   ├── test_search.py
│   │   └── test_navigation.py
│   └── utils
│       ├── data_loader.py
│       └── screenshot.py
├── playwright_config.py
├── requirements.txt
├── README.md
└── run_tests.py
```

- `config`目录包含了所有的配置文件，包括测试环境的配置文件和全局配置文件。
- `pages`目录包含了所有的页面对象，每个页面对象都应该继承`BasePage`类，并且包含了该页面的所有元素和方法。
- `tests`目录包含了所有的测试用例，每个测试用例都应该在`test_cases`目录下，并且应该使用`pytest`框架来运行。`conftest.py`文件应该包含所有的测试用例的共享夹具，如浏览器启动和关闭。
- `playwright_config.py`文件包含了Playwright的配置，如浏览器类型和启动选项。
- `requirements.txt`文件包含了所有的依赖项，可以使用`pip`来安装。
- `README.md`文件应该包含项目的所有说明和文档。
- `run_tests.py`文件是一个简单的脚本，用于运行所有的测试用例。

这种项目结构可以使你的项目更加清晰和易于维护，同时也符合最佳实践。





每个页面都需要继承`BasePage`类，因为`BasePage`类包含了所有页面对象应该具有的共同属性和方法，例如浏览器对象、URL、元素等等。通过继承`BasePage`类，可以避免在每个页面对象中重复编写相同的代码，同时也可以使代码更加清晰和易于维护。

下面是一个示例`BasePage`类的代码：

```python
from playwright.sync_api import Playwright, Browser, BrowserContext, Page


class BasePage:
    def __init__(self, playwright: Playwright, browser: Browser, context: BrowserContext, page: Page):
        self.playwright = playwright
        self.browser = browser
        self.context = context
        self.page = page
        self.url = ""

    def load(self):
        self.page.goto(self.url)

    def get_title(self):
        return self.page.title()

    def get_url(self):
        return self.page.url()
```

在这个示例中，`BasePage`类包含了构造函数、`load`方法、`get_title`方法和`get_url`方法。构造函数接受Playwright、Browser、BrowserContext和Page对象作为参数，并将它们存储在类的实例变量中。`load`方法用于加载页面，`get_title`方法用于获取页面的标题，`get_url`方法用于获取页面的URL。这些方法可以在所有的页面对象中共享和重用。





`page_objects`目录主要用于存储页面对象，每个页面对象应该包含该页面的所有元素和方法。在页面对象中，通常会使用Playwright提供的方法来定位页面元素，例如`page.locator`、`page.locator_all`、`page.wait_for_selector`等等。

下面是一个示例`HomePage`页面对象的代码：

```python
from playwright.sync_api import Page
from .base_page import BasePage


class HomePage(BasePage):
    def __init__(self, page: Page):
        super().__init__(page)
        self.url = "https://www.google.com"

    def search(self, query: str):
        search_input = self.page.locator("[name='q']")
        search_input.fill(query)
        search_input.press("Enter")
```

在这个示例中，`HomePage`类继承了`BasePage`类，并覆盖了`url`属性。`search`方法用于在搜索框中输入关键词并提交搜索请求。在`search`方法中，使用`page.locator`方法定位搜索框元素，并使用`fill`方法输入关键词，最后使用`press`方法模拟按下Enter键。

通过将页面元素和方法封装在页面对象中，可以使测试用例更加简洁和易于维护，同时也可以使页面对象更加可重用和可扩展。



使用Python中的`yaml`库读取`environments`目录下的yaml文件，并将其中的`base_url`值存储到一个变量中。然后，在测试用例中，你可以使用这个变量来构建URL。

以下是一个示例代码：

```python
import yaml

# 读取环境配置文件
with open("environments/dev.yaml", "r") as f:
    env = yaml.safe_load(f)

# 获取base_url
base_url = env["base_url"]

# 使用base_url构建URL
url = f"{base_url}/login"
```

在这个示例中，我们使用`yaml.safe_load`方法读取`dev.yaml`文件，并将其存储在`env`变量中。然后，我们从`env`变量中获取`base_url`的值，并使用这个值构建URL。在测试用例中，你可以使用这个`url`变量来进行测试。

如果你希望在每次执行测试用例时自动读取环境配置文件，你可以将上述代码放在一个`conftest.py`文件中，并使用`pytest`测试框架的`fixture`机制来实现。例如：

```python
import pytest
import yaml

@pytest.fixture(scope="session")
def base_url():
    # 读取环境配置文件
    with open("environments/dev.yaml", "r") as f:
        env = yaml.safe_load(f)

    # 获取base_url
    base_url = env["base_url"]

    return base_url
```

在这个示例中，我们定义了一个名为`base_url`的`fixture`，它会在整个测试会话中只执行一次。在`fixture`的实现中，我们读取`dev.yaml`文件，并返回其中的`base_url`值。在测试用例中，你可以使用`base_url`参数来获取这个值。例如：

```python
def test_login(base_url):
    url = f"{base_url}/login"
    # ...
```

这样，每次执行测试用例时，`base_url`都会自动从`dev.yaml`文件中读取。