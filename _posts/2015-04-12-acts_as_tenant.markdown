---
layout: post
title: acts_as_tenant
tags:
- gem
---

[acts_as_tenant][1] 提供了一种多租户问题的解决方案。

所谓多租户是把一个系统的功能独立地分配给不同的租户，可以想象淘宝上不同的店铺。

首先，你需要在 controller 层设置当前的租户

```
class ApplicationController < ActionController::Base
  set_current_tenant_by_subdomain(:account, :subdomain)
end
```

这里租户是由 Account model 表示，不同的 subdomain
来区分不同的租户，当然你也可以用其它方式来区分不同的租户。

然后，你需要在 model 层声明它是分配给不同的租户的

```
class Addaccounttousers < ActiveRecord::Migration
  def up
    add_column :users, :account_id, :integer
  end
end

class User < ActiveRecord::Base
  acts_as_tenant(:account)
end
```

这样的话，每次针对 User
的读写操作都会被限制在当前的租户范围内，大大简化了多租户问题的实现。


[1]: https://github.com/ErwinM/acts_as_tenant
