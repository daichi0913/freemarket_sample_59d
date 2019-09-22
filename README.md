## Usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|encrypted_password|string|null: false|
|image|text|

### Association
- belongs_to :
- belongs_to :user

## User_detailsテーブル

|Column|Type|Options|
|------|----|-------|
|name_kanji|string|null: false|
|name_kana|string|null: false|
|birthdate|datetime|null: false|
|phone_number|integer|null: false|
|address|text|null: false|

### Association
- belongs_to :
- belongs_to :user


## User_reviewsテーブル

|Column|Type|Options|
|------|----|-------|
|buyer_id|references|null: false, foreign_key:true|
|seller_id|references|null: false, foreign_key:true|
|review_status|integer|null: false|


### Association
- has_many :groups, through: :groups_users
- has_many :groups_users



## User_todo_listsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key:true|
|text|text|null: false|
|link|text|null: false|
|image|text||



### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages


## Notificationsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key:true|
|text|text|null: false|
|link|text|null: false|
|image|text||
|event|string||



### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages



## categorysテーブル

|Column|Type|Options|
|------|----|-------|
|parent_id|integer||
|name|string|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages
  

## Itemsテーブル

|Column|Type|Options|
|------|----|-------|
|category_id|references|null: false, foreign_key:true|
|user_id|references|null: false, foreign_key:true|
|brand_id|references|null: false, foreign_key:true|
|name|string/integer|null: false|
|explain|string/integer|null: false|
|size|string||
|item_status|string|null: false|
|deal_status|string||
|shipping_fee|string|null: false|
|shipping_way|string|null: false|
|region|string|null: false|
|days|integer|null: false|
|price|integer|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users


## Item_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|item_id|references|null: false, foreign_key: true|
|image|text|null: false|

### Association
- belongs_to :group
- belongs_to :user


## Dealsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key:true|
|item_id|references|null: false, foreign_key: true|


### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages




## Likesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key:true|
|item_id|references|null: false, foreign_key:true|


### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users




## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|item_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
|comment|string|null: false|


### Association
- belongs_to :group
- belongs_to :user



## brandsテーブル
|Column|Type|Options|
|------|----|-------|
|brand_group_id|references|null: false, foreign_key: true|
|name|string|null: false|


### Association
- belongs_to :group
- belongs_to :user

## category_brandsテーブル
|Column|Type|Options|
|------|----|-------|
|brand_group_id|references|null: false, foreign_key: true|
|name|string|null: false|

### Association
- belongs_to :group
- belongs_to :user


## Cardsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|customer_id|string|null: false|
|card_id|string|null: false|



### Association
- belongs_to :group
- belongs_to :user


