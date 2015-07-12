---
layout: post
title: Processes-and-Threads--Resque-vs-Sidekiq
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Processes-and-Threads--Resque-vs-Sidekiq/poster.jpg" preload controls>
  <source src="/assets/Processes-and-Threads--Resque-vs-Sidekiq/video.webm" type="video/webm">
  <source src="/assets/Processes-and-Threads--Resque-vs-Sidekiq/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=_8X96hMaRXI>

### 幻灯片

<div class="slideshow"
data-slide-name="Processes-and-Threads--Resque-vs-Sidekiq" data-slide-start="0"
data-slide-end="31"></div>

原幻灯片地址：<https://speakerdeck.com/jdabbs/processes-and-threads-resque-vs-sidekiq>

### 介绍

这是 James Dabbs 在 RailsConf 2015
做的主题分享，介绍了 Rails 社区最热门的后台任务处理方案，resque 和
sidekiq。

Resque 基于多进程，缓解内存泄漏的风险，可以用信号控制。
Sidekiq 基于多线程，性能和并发量更好。

如果内存有限制，就是用 resque，如果代码线程不安全，就用
sidekiq，其他可以视具体情况选择。

作者还现场展示了一些调试代码的技巧，相当不错呢。
