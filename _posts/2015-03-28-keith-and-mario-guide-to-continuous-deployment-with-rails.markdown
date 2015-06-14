---
layout: post
title: Keith and Mario Guide to Continuous Deployment with Rails
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Keith-and-Mario-Guide-to-Continuous-Deployment-with-Rails/poster.jpg" preload controls>
  <source src="/assets/Keith-and-Mario-Guide-to-Continuous-Deployment-with-Rails/video.webm" type="video/webm">
  <source src="/assets/Keith-and-Mario-Guide-to-Continuous-Deployment-with-Rails/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=DazHGyb7Gqg>

### 幻灯片

<div class="slideshow" data-slide-name="Keith-and-Mario-Guide-to-Continuous-Deployment-with-Rails"
data-slide-start="0" data-slide-end="96"></div>

原幻灯片地址：<https://speakerdeck.com/keithpitt/keith-and-marios-guide-to-continuous-deployment>

### 介绍

这是 Keith Pitt 和 Mario Visic 在 RailsConf 2014
做的主题分享，介绍他们是如何做集成部署的，包括

* 代码审查，在 github 上创建一个 pull request
* Feature 开关，可以在生产环境动态打开或关闭一个 feature
* 自动化测试，测试通过再部署
* Smoke 测试，在部署之后针对生产环境做简单测试
* Zero downtime deploys，尤其是注意 database migrations
* 回滚策略
* 应用监控，bugsnag，newrelic 和 pageduty
