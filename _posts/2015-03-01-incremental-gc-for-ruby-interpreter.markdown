---
layout: post
title: Incremental GC for Ruby Interpreter
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Incremental-GC-for-Ruby-Interpreter/poster.jpg" preload controls>
  <source src="/assets/Incremental-GC-for-Ruby-Interpreter/video.webm" type="video/webm">
  <source src="/assets/Incremental-GC-for-Ruby-Interpreter/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=4UO60ocw52w>

### 介绍

这是 Koichi Sasada 在2014年 RubyConf 上
的演讲，Koichi Sasada 是 Ruby 核心成员，主要负责性能提升，这个演讲在
Ruby 2.2 发布之前，介绍了 Ruby 2.1 引入的 RGenGC 和 Ruby 2.2 引入的 RincGC

RGenGC 极大地减少了 GC 的时间和停顿 (Stop the world) 的时间
RincGC 在 RGenGC 的基础之上，进一步减少了停顿的时间

演讲中详细介绍了 RGenGC 和 RincGC 的原理和实现，对 Ruby GC
感兴趣的童鞋可以看看一看。
