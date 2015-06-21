---
layout: post
title: csv-importer
tags:
- gem
---

[csv-importer][1] 给 csv 导入提供了很多便利的方法，比如

1. 数据验证
2. 数据容错
3. 数据转换
4. 错误处理
5. 报告

```
class ImportUserCSV
  include CSVImporter

  model User # an active record like model

  column :email, to: ->(email) { email.downcase }, required: true
  column :first_name, as: [ /first.?name/i, /pr(é|e)nom/i ]
  column :last_name,  as: [ /last.?name/i, "nom" ]
  column :published,  to: ->(published, user) { user.published_at = published ? Time.now : nil }

  identifier :email # will find_or_update via :email

  when_invalid :skip # or :abort
end


import = ImportUserCSV.new(file: my_file)

import.valid_header?  # => false
import.report.message # => "The following columns are required: email"

# Assuming the header was valid, let's run the import!

import.run!
import.report.success? # => true
import.report.message  # => "Import completed. 4 created, 2 updated, 1 failed to update"
```

[1]: https://github.com/BrewhouseTeam/csv-importer
