---
layout: post
title: Refactoring Towards Component-based Rails Architectures
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Refactoring-Towards-Component-based-Rails-Architectures/poster.jpg" preload controls>
  <source src="/assets/Refactoring-Towards-Component-based-Rails-Architectures/video.webm" type="video/webm">
  <source src="/assets/Refactoring-Towards-Component-based-Rails-Architectures/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=MIhlAiMc7tU>

### 幻灯片

<div class="slideshow" data-slide-name="Refactoring-Towards-Component-based-Rails-Architectures"
data-slide-start="0" data-slide-end="96"></div>

原幻灯片地址：<https://speakerdeck.com/shagemann/refactoring-towards-component-based-rails-architectures-at-railsconf>

### 介绍

这是 Stephan Hagemann 在 RailsConf 2014
做的主题分享，介绍他是如何分解一个大型的 Rails 项目。

Stephan 采取的是 rails engine，将不同的组件通过 engine 分割成多个小型
rails 项目，不同的 engine 之间只有单向的依赖以降低复杂度。

每个组件都可以包含 model / view / controller，组件可以独立测试。

相比于 SOA，通过 rails engine
可以只有一个代码仓库，只需一次部署，重构也更方便，组件之间的依赖也更易于管理。
