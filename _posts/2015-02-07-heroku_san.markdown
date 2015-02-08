---
layout: post
title: heroku_san
tags:
- gem
---

[heroku_san][1] 提供了一套 heroku 的工具来管理你的 heroku 应用，
尤其是当你一个应用需要部署到多个 heroku 应用时 (staging,
production)，用起来非常方便。

你可以把 heroku 的配置信息都写在 config/heroku.yml 文件里

```
production:
  stack: cedar
  app: xinminlabs-production
  config:
    WEB_CONCURRENCY: 2
    DB_POOL: 10
  addons:
    - heroku-postgresql:crane
    - newrelic:wayne

staging:
  stack: cedar
  app: xinminlabs-staging
  config:
    WEB_CONCURRENCY: 2
    DB_POOL: 10
  addons:
    - heroku-postgresql:dev
```

这样一目了然，有几个 heroku 应用，各自都有什么 config，装了哪些 addon

heroku-san 提供了很多功能，比如

```
rake production heroku:addons # 安装 production 的所有 addons
rake staging heroku:config # 同步 staging 所有的 config
rake production heroku:push #  部署到 production
rake staging heroku:logs:tail # 查看 staging 上的日志
rake production heroku:console # 运行 production 上的 rails console
......
```

如果你有在 heroku 上部署多个应用，heroku_san 绝对能为你省去不少麻烦。


[1]: https://github.com/fastestforward/heroku_san
