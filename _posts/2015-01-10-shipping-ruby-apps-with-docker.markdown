---
layout: post
title: Shipping Ruby Apps with Docker
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Shipping-Ruby-Apps-with-Docker/poster.jpg" preload controls>
  <source src="/assets/Shipping-Ruby-Apps-with-Docker/video.webm" type="video/webm">
  <source src="/assets/Shipping-Ruby-Apps-with-Docker/video.mp4" type="video/mp4">
</video>

原视频地址：<http://www.youtube.com/watch?v=mVN7aTqr550>

### 介绍

这是 Bryan Helmkamp 在2014年 RedDotRubyConf 的演讲，介绍了 Docker 的基础，涉及到

* Container-Based Virtualization
* Linux Container (LXC)

Docker 的好处有

* 环境独立
* CPU 和内存占用低
* 快速启动
* 高密度（一台服务器可以运行更多 docker container）

其中还做了一个 Demo，在 Docker 中运行一个 Sinatra 应用。通过 Demo 可以看到，
Docker 除了之前提到的好处，还能 cache 之前的运行给过，使得之后启动更快，用
Docker 也可以快速启动一个应用的 container，这样可以快速为应用扩容。

最后还讨论了部署的粒度，比如一个 process 一个 docker container 或者是 一个
app 一个 docker container。

如果你对 Docker 还没有深入的理解和实践，可以来听听这个演讲。
