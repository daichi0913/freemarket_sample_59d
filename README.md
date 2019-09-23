# TABLES
entitiy-relation diagram : https://drive.google.com/file/d/191Btzn0iudYOZ4v3OPHS2UPIz09e-kzD/view?usp=sharing

## Usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|encrypted_password|string|null: false|
|image|text|

### Association
- has_one : user_detail
- has_one : card
- has_many : deals
- has_many : items


## User_detailsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key:true|
|name_kanji|string|null: false|
|name_kana|string|null: false|
|birthdate|datetime|null: false|
|phone_number|integer|null: false|
|address|text|null: false|

### Association
- belongs_to : user


## Cardsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|customer_id|string|null: false|
|card_id|string|null: false|

### Association
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
- has_many :brands, through: :category_brands
- has_many :category_brands
- has_many :items
  

## brandsテーブル

|Column|Type|Options|
|------|----|-------|
|brand_group_id|references|null: false, foreign_key: true|
|name|string|null: false|

### Association
- has_many :categorys, through: :category_brands
- has_many :category_brands
- has_many :items
- belongs_to : brand_group


## Brand_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many : brands


## category_brandsテーブル

|Column|Type|Options|
|------|----|-------|
|brand_id|references|null: false, foreign_key:true|
|category_id|references|null: false, foreign_key:true|

### Association
- belongs_to : brand
- belongs_to : category


## Itemsテーブル

|Column|Type|Options|
|------|----|-------|
|category_id|references|null: false, foreign_key:true|
|user_id|references|null: false, foreign_key:true|
|brand_id|references|null: false, foreign_key:true|
|region_id|reference|null: false, foreign_key:true|
|name|string/integer|null: false|
|size|string||
|item_status|string|null: false|
|deal_status|string||
|shipping_fee|string|null: false|
|shipping_way|string|null: false|
|days|integer|null: false|
|price|integer|null: false|
|explain|string/integer|null: false|

### Association
- has_many : item_images
- has_one : deal
- belongs_to: user
- belongs_to: category
- belongs_to: brand
- belongs_to: region


## Item_imagesテーブル

|Column|Type|Options|
|------|----|-------|
|item_id|references|null: false, foreign_key: true|
|image|text|null: false|

### Association
- belongs_to : item


## Regionsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many : items


## Dealsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key:true|
|item_id|references|null: false, foreign_key: true|
|status|string|null: false|

### Association
- belongs_to : user
- belongs_to : item


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







