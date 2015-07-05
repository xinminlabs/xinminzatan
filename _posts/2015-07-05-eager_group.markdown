---
layout: post
title: eager_group
tags:
- gem
---

[eager_group][1] 主要是来解决 includes 和 counter_cache 无法解决的一些
n+1 聚合函数查询。

```
SELECT "posts".* FROM "posts";
SELECT COUNT(*) FROM "comments" WHERE "comments"."post_id" = 1 AND "comments"."status" = 'approved'
SELECT COUNT(*) FROM "comments" WHERE "comments"."post_id" = 2 AND "comments"."status" = 'approved'
SELECT COUNT(*) FROM "comments" WHERE "comments"."post_id" = 3 AND "comments"."status" = 'approved'
```

=>

```
SELECT "posts".* FROM "posts";
SELECT COUNT(*) AS count_all, post_id AS post_id FROM "comments" WHERE "comments"."post_id" IN (1, 2, 3) AND "comments"."status" = 'approved' GROUP BY post_id;
```

或者是

```
SELECT "posts".* FROM "posts";
SELECT AVG("comments"."rating") AS avg_id FROM "comments" WHERE "comments"."post_id" = 1;
SELECT AVG("comments"."rating") AS avg_id FROM "comments" WHERE "comments"."post_id" = 2;
SELECT AVG("comments"."rating") AS avg_id FROM "comments" WHERE "comments"."post_id" = 3;
```

=>

```
SELECT "posts".* FROM "posts";
SELECT AVG("comments"."rating") AS average_comments_rating, post_id AS post_id FROM "comments" WHERE "comments"."post_id" IN (1, 2, 3) GROUP BY post_id;
```

使用起来会很简单

```
class Post < ActiveRecord::Base
  has_many :comments

  define_eager_group :comments_average_rating, :comments, :average, :rating
  define_eager_group :approved_comments_count, :comments, :count, :*, -> { approved }
end

class Comment < ActiveRecord::Base
  belongs_to :post

  scope :approved, -> { where(status: 'approved') }
end
```

用 define_eager_group 来定义 aggregate sql functions，
然后就可以用 eager_group 来查询

```
posts = Post.all.eager_group(:comments_average_rating, :approved_comments_count)
posts.each do |post|
  post.comments_average_rating
  post.approved_comments_count
end
```

[1]: https://github.com/xinminlabs/eager_group
