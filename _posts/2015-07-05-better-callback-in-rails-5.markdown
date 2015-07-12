---
layout: post
title: Better Callbacks in Rails 5
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Better-Callbacks-in-Rails-5/poster.jpg" preload controls>
  <source src="/assets/Better-Callbacks-in-Rails-5/video.webm" type="video/webm">
  <source src="/assets/Better-Callbacks-in-Rails-5/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=X5WJ-v4MLzw>

### 幻灯片

<div class="slideshow"
data-slide-name="Better-Callbacks-in-Rails-5" data-slide-start="0"
data-slide-end="17"></div>

原幻灯片地址：<https://speakerdeck.com/claudiob/better-callbacks-in-rails-5>

### 介绍

这是 Claudio Baccigalupo 在 RailsConf 2015
做的主题分享，分享了 Rails 5 带来的 Callbacks 的改变。

Rails 4 中如果 callback 返回 false 会终止后续的 callback 和
操作。很多开发人员没有意识到这点，导致意想不到的问题。

```
class User < ActiveRecord::Base
  before_save :set_default_values

  def set_default_values
    self.admin ||= false
  end
end

User.create!
#=> ActiveRecord::RecordNotSaved
```

Rails 5 改变了这样的行为，不管是否返回 false，后续的 callback
和操作都会继续执行，如果要终止的话，必须抛出异常，比如

```
class User < ActiveRecord::Base
  before_save :ensure_admin

  def ensure_admin
    throw(:abort) unless self.admin
  end
end

User.create!
#=> ActiveRecord::RecordNotSaved
```
