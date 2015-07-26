---
layout: post
title: rails-livestamp
tags:
- gem
---

[rails-livestamp][1] 为 rails 集成了 jquery 插件 ——
[livestamp.js][2]，可以方便的显示过去多少时间的文字（功能上类似
rails helper `time_ago_in_words`），可自动更新。

你只需要在 html 便签中添加 data-livestamp 即可，比如

```
You discovered rails-livestamp <span data-livestamp="#{Time.now.to_i}"></span>.
```

即可得到

```
You discovered rails-livestamp a minutes ago.
```

data-livestamp 的值可以是 UNIX timestamp，也可以是 ISO 8601 timestamp。

把 timeago 的时间放到 js
端上的好处一是更精确，可以自动更新，二是减轻服务器端计算的压力。


[1]: https://github.com/Bunlong/rails-livestamp
[2]: http://mattbradley.github.io/livestampjs/
