---
layout: post
title: overcommit
tags:
- gem
---

[overcommit][1] 是一套可管理可扩展的 git hook 管理工具。

overcommit 会生产一个配置文件 `.overcommit.yml`，比如：

```
PreCommit:
  Brakeman:
      enabled: true
```

这样在每次 commit 之前会使用 brakeman 检查项目的安全性。

你可以管理的 git hook 包括： CommitMsg, PostCheckout, PostCommit,
PostMerge, PostRewrite, PreCommit, PrePush, PreRebase。

而可以检查的选项非常多，包括：Brakeman, JsLint, CssLint, RubyLint
等等，你也可以写自己的检查选项。

[1]: https://github.com/brigade/overcommit
