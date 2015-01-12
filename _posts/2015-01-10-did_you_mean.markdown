---
layout: post
title: did_you_mean
tags:
- gem
---

[did_you_mean][1] 一个神奇的 gem，当遇到程序错误时，did_you_mean
会在错误栈中提示你是不是拼写错误导致的。比如，

{% highlight ruby %}
class User
  attr_accessor :first_name, :last_name

  def to_s
    "#{f1rst_name} #{last_name}" # f1rst_name ???
  end
end

user.to_s
# => NameError: undefined local variable or method `f1rst_name' for #<User:0x0000000928fad8>
#
#     Did you mean? #first_name
#
{% endhighlight %}

{% highlight ruby %}
class Book
  class TableOfContents
    # ...
  end
end

Book::TableofContents # TableofContents ???
# => NameError: uninitialized constant Book::TableofContents
#
#     Did you mean? Book::TableOfContents
#
{% endhighlight %}

可以看出来，did_you_mean 会根据定义上下文（类名，变量名等等）来提示。

我不记得有多少次当程序出错时，我一次又一次地抱怨这怎么可能，
结果发现只是一个小小的拼写错误，然后懊悔自己怎么这么粗心。

有了 did_you_mean gem，就不用再浪费时间在那些拼写错误上了。


[1]: https://github.com/yuki24/did_you_mean
