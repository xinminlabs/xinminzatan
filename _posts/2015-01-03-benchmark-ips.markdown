---
layout: post
title: benchmark-ips
tags:
- gem
---

[benchmark-ips][1] 是一个新出的 benchmark 工具，报告一段代码在指定时间内执行的次数。

一般大家都会用 ruby 标准库来做 benchmark 来测试执行一段代码所花的时间，比如

{% highlight ruby %}
require 'benchmark'

n = 1_000_000
Benchmark.bm(20) do |x|
  x.report('addition') { n.times { 1 + 2 } }
  x.report('addition with send') { n.times { 1.send(:+, 2) } }
end
{% endhighlight %}

{% highlight bash %}
#                          user     system      total        real
addition               0.060000   0.000000   0.060000 (  0.063733)
addition with send     0.120000   0.000000   0.120000 (  0.119405)
{% endhighlight %}

benchmark-ips 虽然是新出的 gem，却迅速蹿红，成为 rails 团队推荐的
benchmark 工具。

{% highlight ruby %}
require 'benchmark/ips'

Benchmark.ips do |x|
  x.report('addition') { 1 + 2 }
  x.report('addition with send') { 1.send(:+, 2) }
end
{% endhighlight %}

{% highlight bash %}
Calculating -------------------------------------
            addition    127559 i/100ms
  addition with send    116623 i/100ms
-------------------------------------------------
            addition  8343518.5 (±7.4%) i/s -   41456675 in   4.999424s
  addition with send  5721822.9 (±8.3%) i/s -   28456012 in   5.013402s
{% endhighlight %}

可以看出 benchmark-ips 是报告在指定时间内（默认是5秒）代码执行的次数。

相比于 ruby 的 benchmark 标准库，benchmark-ips 有几个好处

1. 不需要再猜测该执行多少次代码才能得出有意义的 benchmark
   结果，比如使用标准库的时候我们指定代码执行100万次。
2. 会在 benchmark 之前预热 (warmup) 执行代码一段时间（默认是100毫秒），
   使得 benchmark 的结果更加靠谱。
3. 更好的报告排版，比如用标准库的时候我们需要指定标注显示长度为20来保证输出上排版对齐。

赶紧试试用 benchmark-ips 来 benchmark 你的代码吧。

[1]: https://github.com/evanphx/benchmark-ips
