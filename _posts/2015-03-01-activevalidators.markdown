---
layout: post
title: activevalidators
tags:
- gem
---

[activevalidators][1] 是一个 activemodel / activerecord validations
的集合。

activevalidators 提供了很多常用的 validations，比如 email, url, phone，
避免重复开发，而且相比我们自己开发的，activevalidators 的 validations 更完善。
比如：

```
class User
  validates :company_siren, :siren       => true
  validates :email_address, :email       => true # == :email => { :strict => false }
  validates :link_url,      :url         => true # Could be combined with `allow_blank: true`
  validates :password,      :password    => { :strength => :medium }
  validates :postal_code,   :postal_code => { :country => :us }
  validates :twitter,       :twitter     => true
  validates :twitter_at,    :twitter     => { :format => :username_with_at }
  validates :twitter_url,   :twitter     => { :format => :url }
  validates :user_phone,    :phone       => true
end

class Identification
  validates :nino, :nino => true
  validates :sin,  :sin  => true
  validates :ssn,  :ssn  => true
end

class Article
  validates :slug,            :slug => true
  validates :expiration_date, :date => {
                                          :after => lambda { Time.now },
                                          :before => lambda { Time.now + 1.year }
                                        }
end

class Device
  validates :ipv4, :ip => { :format => :v4 }
  validates :ipv6, :ip => { :format => :v6 }
end

class Account
  validates :any_card,        :credit_card => true
  validates :visa_card,       :credit_card => { :type => :visa }
  validates :credit_card,     :credit_card => { :type => :any  }
  validates :supported_card,  :credit_card => { :type => [:visa, :master_card, :amex] }
end

class Order
  validates :tracking_num, :tracking_number => { :carrier => :ups }
end

class Product
  validates :code, :barcode => { :format => :ean13 }
end
```

Don't repeat yourself

[1]: https://github.com/franckverrot/activevalidators
