---
layout: post
title: Breaking Up With the Asset Pipeline
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Breaking-Up-With-the-Asset-Pipeline/poster.jpg" preload controls>
  <source src="/assets/Breaking-Up-With-the-Asset-Pipeline/video.webm" type="video/webm">
  <source src="/assets/Breaking-Up-With-the-Asset-Pipeline/video.mp4" type="video/mp4">
</video>

原视频地址：<https://vimeo.com/103438429>

### 介绍

这是 Alan Peabody 在2014年 Burlington Ruby Conference
的演讲，提供了一种有别于 asset pipeline 的选择。

演讲首先谈了 asset pipeline 的一些问题

1. js 类库需要 gem 包封装，一些 gem 包不再维护或是封装的 js
类库已经过时
2. 当 js / css 文件非常多得时候，开发会变得缓慢

Alan 给出的解决方法是将前端和后端的代码分开，rails 只是作为一个 api
服务器，前端使用 js 的技术

* backbone / ember / angular
* npm
* bower
* browserify
* grunt / gulp

这样可以更方便地管理 js / css
类库，开发时可以自动压缩合并，加快浏览器加载的速度。

如果你对前后端分开的方式感兴趣的话，不妨看看这段演讲。
