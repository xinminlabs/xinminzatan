---
layout: post
title: Going the Distance
tags:
- talk
---

### 视频

<video class="video" poster="/assets/Going-the-Distance/poster.jpg" preload controls>
  <source src="/assets/Going-the-Distance/video.webm" type="video/webm">
  <source src="/assets/Going-the-Distance/video.mp4" type="video/mp4">
</video>

原视频地址：<https://www.youtube.com/watch?v=wujPwfY8t7Y>

### 幻灯片

<div class="slideshow" data-slide-name="Going-the-Distance"
data-slide-start="0" data-slide-end="229"></div>

原幻灯片地址：<https://speakerdeck.com/schneems/going-the-distance>

### 介绍

这是 Richard Schneeman 在2014年 RubyKaigi
上的演讲，介绍了比较两个字符串的距离算法。

首先作者提出问题，当他使用 git 的时候，如果拼写错误，比如

```
$ git commmit -m first
WARNING: You called a Git command named 'commmit',
which does not exist.
Continuing under the assumption that you meant 'commit'
in 0.1 seconds automatically...
```

那这个纠正的提示是如何实现的呢？作者介绍了两种算法

Hamming Distance 用于比较两个等长的字符串，
适用于误差检测与纠错码，但不适合检查拼写错误

Levenshtein Distance 可以用来比较两个不同长度的字符串，
同时作者给出两种实现，一是递归，一是矩阵。

然后作者给 rails 提交了一个 pull request，来提示 rails
命令行中的拼写错误

```
$ rails g migratoon
Could not find generator 'migratoon'. Maybe you meant 'migration' or 'generator' or 'mailer'
Run `rails generate --help` for more options.
```

作者还提到了其它的算法，比如 Longest common subsequence Distance 和
Manhattan Distance
