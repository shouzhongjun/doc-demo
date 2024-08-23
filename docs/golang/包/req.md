# 请求接口包
网址:https://req.cool/zh/


```shell
go get github.com/imroc/req/v3
```

```go
package main

import (
    "github.com/imroc/req/v3"
)

func main() {
    req.DevMode() // Treat the package name as a Client, enable development mode
    req.MustGet("https://httpbin.org/uuid") // Treat the package name as a Request, send GET request.

    req.EnableForceHTTP1() // Force using HTTP/1.1
    req.MustGet("https://httpbin.org/uuid")
}
```

