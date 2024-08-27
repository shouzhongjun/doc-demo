---
tag:
 - 测试
tags:
 - Playwright
categories:
 - 自动化
description: 表格方式对比Playwright 和 Selenium 的区别
top: 2
sticky: 998
---


# Playwright 和 Selenium 的区别

| 编号 | 功能              | Playwright                                                   | Selenium                                                     | 哪个更优秀 |
| ---- | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- |
| 1    | 学习资料          | 相对少                                                       | 多                                                           | Selenium   |
| 2    | 用户群体          | 出现的比较晚，用户量相对少                                   | 出现的早，用户量多                                           | Selenium   |
| 3    | 支持语言          | TypeScript、JavaScript、Python、.NET、Java                   | C#,Java,Perl,PHP,Python 和Ruby                               | Selenium   |
| 4    | 支持浏览器        | Chromium（包含chrome， msedge）、WebKit 和 Firefox           | IE（7, 8, 9, 10, 11），Firefox，Safari，Google Chrome，Opera，Edge等 | Selenium   |
| 5    | 跨平台            | Windows，Linux(只支持Ubuntu部分系统) ，Mac                   | Windows，Linux，Mac 都支持                                   | Selenium   |
| 6    | 浏览器安装        | 命令行安装                                                   | 自己安装                                                     | Playwright |
| 7    | 浏览器驱动        | 不需要驱动                                                   | 下载对应版本驱动                                             | Playwright |
| 8    | 启动速度          | 快                                                           | 慢                                                           | Playwright |
| 9    | context 环境隔离  | 有                                                           | 无                                                           | Playwright |
| 10   | headless 无头模式 | 默认headless， 也可以设置GUI                                 | 默认GUI模式，也可以设置headless                              | Playwright |
| 11   | 无痕模式          | 默认无痕模式，对应测试很有帮助，对于爬虫用户可能访问页面不通过 | 默认非无痕默认，爬虫用户特别喜欢                             | Selenium   |
| 12   | 页面等待          | wait_for_load_state可以精准等待commit,domcontentloaded,load,networkidle四种状态 | implicitly_wait等待页面加载完成                              | Playwright |
| 13   | 元素定位          | 提供多个内置定位器，定位方式更贴近业务，定位方式更多         | 八大定位                                                     | Playwright |
| 14   | 元素等待          | 定位元素自带等待机制                                         | 需要自己封装等待方法                                         | Playwright |
| 15   | 点击元素等操作    | 会判断元素状态，出现位置，是否可点击智能判断                 | 需要自己封装webdriverwait.until方法,难度较大                 | Playwright |
| 16   | 定位报错          | 会人性化告诉你定位到几个元素，并推荐定位方式                 | 报错需要自己去猜谜，自己排除各种可能性                       | Playwright |
| 17   | 元素不在当前屏幕  | 会判断元素位置，自动滚动元素出现位置                         | 需要自己去判断滚动                                           | Playwright |
| 18   | iframe            | 通过对象操作，不用切换                                       | 需要来回切换                                                 | Playwright |
| 19   | alert             | 默认监听自动关闭，可以异步监听                               | 需要自己判断，无异步监听                                     | Playwright |
| 20   | 文件上传          | 监听文件上传时间，处理优雅                                   | 无法解决非input 上传                                         | Playwright |
| 21   | 文件下载          | 可以监听下载                                                 | 只能设置浏览器默认位置                                       | Playwright |
| 22   | 多窗口标签        | 可以监听窗口事件，操作方便                                   | 需要来回切换                                                 | Playwright |
| 23   | 事件监听          | 可以监听各种事件                                             | 无法监听                                                     | Playwright |
| 24   | 捕获ajax 请求     | 可以捕获ajax 请求和 返回                                     | 无法捕获                                                     | Playwright |
| 25   | mock 功能         | 可以模拟想要的任何接口数据                                   | 无mock 功能                                                  | Playwright |
| 26   | 断言              | 提供expect 丰富断言                                          | 需要自己封装webdriverwait.until方法,难度较大                 | Playwright |
| 27   | 录制视频          | 录制用例视频                                                 | 无                                                           | Playwright |
| 28   | trace 追踪        | 有                                                           | 无                                                           | Playwright |
| 29   | 断点调试          | 有                                                           | 无                                                           | Playwright |
| 30   | 录制              | 可以生成pytest用例                                           | 录制功能比较简单                                             | Playwright |
| 31   | 鼠标键盘操作      | 调用简单方便                                                 | 导入模块，操作复杂                                           | Playwright |
| 32   | base_url          | 可以添加全局base_url                                         | 无此功能                                                     | Playwright |
| 33   | 接口测试          | 提供接口测试                                                 | 无此功能                                                     | Playwright |
| 34   | grid 分布式       | 无                                                           | selenium-grid 分布式                                         | Selenium   |
| 35   | 协议              | websockt 协议，可以实时获取页面状态                          | http 协议，只能获取当时的状态，需自己轮询判断                | Playwright |
| 36   | 执行JavaScript    | 可以在page,iframe,元素对象执行JavaScript                     | 只能在driver对象执行JavaScrip                                | Playwright |
| 37   | 面试              | 要求playwright 比较少                                        | 问selenium 比较多                                            | Selenium   |
| 38   | 学习难易程度      | 容易，无需封装，直接用                                       | 难度较大，需要封装                                           | Playwright |

Playwright和Selenium都是常用的自动化测试工具，它们有许多相似之处，比如都可以模拟用户在Web应用程序中的交互行为，都可以跨浏览器和操作系统运行，并且都可以集成到多种测试框架中。

然而，Playwright和Selenium也有一些不同之处：

1. 支持的浏览器：Playwright支持Chrome、Firefox、Safari、Edge以及Chromium-based浏览器，而Selenium支持的浏览器更多，包括Chrome、Firefox、Safari、Edge、Internet Explorer、Opera等。
2. 性能：Playwright具有更好的性能，因为它使用了现代Web浏览器中的一些高级API，可以更快速地模拟用户交互行为。
3. 可靠性：Playwright在处理一些复杂的自动化测试场景时比Selenium更可靠，因为它提供了更多的工具和机制来处理异步任务、页面加载时间等问题。
4. API设计：Playwright的API设计更加直观和易于使用，可以帮助开发者更快速地编写测试脚本。
5. 调试工具：Playwright提供了更丰富的调试工具，包括截图、录屏、日志等，可以帮助开发者更快速地排查问题。

总的来说，Playwright相较于Selenium在性能、可靠性和API设计等方面有一定优势，但是由于Selenium支持的浏览器更多，因此在某些场景下可能更适合使用Selenium。