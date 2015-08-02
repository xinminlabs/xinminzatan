---
layout: post
title: paper_trail
tags:
- gem
---

[paper_trail][1] 可以跟踪 model 数据的变化，适合做审计或版本化。

首先通过 `paper_trail` 的 generator 生产数据表，

```
class Widget < ActiveRecord::Base
  has_paper_trail
end

# 获取 widget 对象的所有版本
widget.versions
```

每次增加或修改一个 widget 都会在 versions
表中增加一条记录，你可以很容易查出一个一条记录什么时候被修改过记忆被谁修改了。

当然你也可以定制 `paper_trail`
的行为，比如记录一些额外的属性，或者某些条件下不记录 version。

`paper_trail` 还有很多其它的功能，你可以查看官方的文档来学习。


[1]: https://github.com/airblade/paper_trail
