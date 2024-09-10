# iframe

## 网址：https://wujie-micro.github.io/demo-main-vue/home

## 定位到iframe

```python
frome playwright.sync_api import sync_playwright
playwright = sync_playwright().start()
browser = playwright.chromium.launch()
page = browser.new_page()
page.goto("https://wujie-micro.github.io/demo-main-vue/home")
page.wait_for_selector("iframe")
frame = page.frame(name="iframe")
frame.get_by_selector("button").click()
```

