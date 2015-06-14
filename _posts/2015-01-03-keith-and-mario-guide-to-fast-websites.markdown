---
layout: post
title: "Keith and Mario's Guide to Fast Websites"
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Keith-and-Mario-Guide-to-Fast-Websites/poster.jpg" preload controls>
  <source src="/assets/Keith-and-Mario-Guide-to-Fast-Websites/video.webm" type="video/webm">
  <source src="/assets/Keith-and-Mario-Guide-to-Fast-Websites/video.mp4" type="video/mp4">
</video>

原视频地址：<https://vimeo.com/61342267>

### 幻灯片

<div class="slideshow" data-slide-name="Keith-and-Mario-Guide-to-Fast-Websites"
data-slide-start="0" data-slide-end="82"></div>

原幻灯片地址：<https://speakerdeck.com/keithpitt/keith-and-marios-guide-to-fast-websites>

### 介绍

这是 Keith Pitt 和 Mario Visic 在 Ruby Conference Australia 2013
做的主题分享，介绍他们在实战中如何将一个网站的页面加载时间从9157毫秒优化到2秒之内。

由于80%到90%的页面响应时间花在前端渲染，所以这个主题分享主要是站在前端的角度做优化的。

在优化之前，最重要的是度量时间，这里用的是 wbench 和浏览器自带的工具。

这里用到得优化方法包括

1. 压缩 (minify) css 和 js 文件
2. 压缩 (gzip) html, css 和 js 应答内容
3. 压缩图片，比如用 ImageOption 无损压缩，对于小图片可以采用 sprites 或
   font 来优化
4. 把 script 标签从 html head 移到 html body 底部
5. 异步加载 js
6. 用 CDN 加速资源 (图片，css 和 js) 下载，下载资源应答不带 cookie
7. 使用 SPDY

经过这些步骤，网站页面的加载时间只是原来的20%左右。

对网站性能优化感兴趣的同学，这个主题分享是非常棒的案例。
