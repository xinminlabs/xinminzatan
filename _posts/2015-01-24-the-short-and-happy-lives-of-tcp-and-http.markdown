---
layout: post
title: The Short and Happy Lives of TCP and HTTP
tags:
- talk
---

### 视频

<video class="video" poster="/assets/The-Short-and-Happy-Lives-of-TCP-and-HTTP/poster.jpg" preload controls>
  <source src="/assets/The-Short-and-Happy-Lives-of-TCP-and-HTTP/video.webm" type="video/webm">
  <source src="/assets/The-Short-and-Happy-Lives-of-TCP-and-HTTP/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=4tBCDOgtWCg>

### 幻灯片

<div class="slideshow" data-slide-name="The-Short-and-Happy-Lives-of-TCP-and-HTTP"
data-slide-start="0" data-slide-end="73"></div>

原幻灯片地址：<https://speakerdeck.com/snhorne/the-short-but-happy-lives-of-tcp-and-http-requests>

### 介绍

这是 Starr Horne 在 Golden Gate Ruby Conference 2014
做的主题分享，从网络协议上详解了为什么创建一个 tcp 或者 http
请求是代价高昂的，包括

* 网络延迟
* 握手协议
* 网络拥塞管理

演讲中也给出了可以优化的选项

* Web 服务器
* Linux 内核调优
* 减少 http 请求

演讲中给出的一些参考资料也非常值得一看。
