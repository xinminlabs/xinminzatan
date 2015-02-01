---
layout: post
title: bower-rails
tags:
- gem
---

[bower-rails][1] 可以方便地集成 bower 到 rails 项目中。

[bower][2] 是前端类库管理包工具，相当于 ruby 中的 bundler。相比于通过
gem 来引用 js / css 类库，使用 bower 则

1. 更直接。通过 bundler
   引用，必须要看源码才能知道具体引用了哪个类库，版本是多少，而通过
   bower 的话则一目了然。
2. 可以指定不同的类库版本，升级也更方便。
3. 避免依赖冲突，和 bundler 一样，在遇到依赖库冲突时，bower 会给出提示。

一直觉得用 bundler 来引用 js / css 类库有点越俎代庖，该 js 管得还是让 js
(bower) 自己管吧。


[1]: https://github.com/42dev/bower-rails
[2]: https://github.com/bower/bower
