---
layout: post
title: globalize
tags:
- gem
---

[globalize][1] 提供了一套基于 ActiveRecord 的解决多语言的类库。

Rails 多语言解决方案是基于 yaml 配置文件的，这对于一些硬编码的内容，
比如（注册 / Register），但是对于存在数据库中的内容则显得无能为力。

globalize 则提供了非常完善的解决方案，
比如我们有一个 Hospital 的 Model，name 是需要支持多语言的

```
class Hospital < ActiveRecord::Base
  translates :name
end
```

其工作原理是对应 hospitals table 生成一个 hospital_translations table

| id | hospital_id | name | locale |
| ----- | ----- | ----- | ----- |
| 1 | 1 | 瑞金医院 | zh-CN |
| 1 | 1 | Ruijin Hospital | en-US |

globalize 会根据当前的 I18n.locale 来读取保存相对应语言的内容，
几乎可以无缝集成到你的 rails 应用中去。

globalize 还提供了 migrate 方法来创建 translations 表和迁移数据。

```
class CreateHospitalTranslations < ActiveRecord::Migration
  def up
    Hospital.create_translation_table!({ :name => :string }, { :migrate_data => true })
  end

  def down
    Hospital.drop_translation_table!
  end
end
```

globalize 绝对是多语言网站开发的不二选择

[1]: https://github.com/globalize/globalize
