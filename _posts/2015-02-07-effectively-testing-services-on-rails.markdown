---
layout: post
title: Effectively Testing Services on Rails
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Effectively-Testing-Services-on-Rails/poster.jpg" preload controls>
  <source src="/assets/Effectively-Testing-Services-on-Rails/video.webm" type="video/webm">
  <source src="/assets/Effectively-Testing-Services-on-Rails/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=sMWthvdWS-w>

### 幻灯片

<div class="slideshow" data-slide-name="Effectively-Testing-Services-on-Rails"
data-slide-start="1" data-slide-end="76"></div>

原幻灯片地址：<http://www.slideshare.net/neal_kemp/effectively-testing-services-on-rails-railsconf-2014>

### 介绍

这是 Neal Kemp 在2014年 RailsConf
的演讲，介绍了他是如何做依赖第三方服务的测试。

第三方服务可以是 twitter, facebook, amazon s3
等等，使用第三方服务可以加快开发速度，更容易扩展，得到更多社交分享。

第三方服务很可能成为网站的关键节点，比如用 twitter 和 facebook
账号登录，那如何保证对第三方的请求是正确的？该如何测试？

因为第三方服务对于你的应用是一个黑盒，网络也可能不稳定，
所以你在测试的时候应该避免直接向第三方服务发送请求。

演讲重点介绍了如何不发送请求来测试对第三方服务的依赖

1. `webmock`，这是一个通用的模拟 http 请求和应答的类库。
2. `fb_graph-mock`，这是专门针对 facebook graph 的模拟类库。
3. `sham_rack`，通过内建 rack 应用来模拟 http 请求和应答。
4. `vcr`，发送一次真实的 http
   请求，记录真实的应答，然后对于之后的请求直接返回记录的应答。

使用这些类库使得测试依赖第三方服务的代码变得非常容易，
也非常快（不需要网络）。
