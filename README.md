## usersテーブル

|Column|Type|Options|
|------|----|-------|


|user_name|string|null: false, foreign_key: true|
|user_email|string|null: false, foreign_key: true|
|user_pass|string|null: false, foreign_key: true|
|user_image|string|null: false, foreign_key: true|



### Association
- belongs_to :group
- belongs_to :user


## categoriesテーブル

|Column|Type|Options|
|------|----|-------|
|parent_id|integer|null: false|
|name|string|null: false|
|brand_group_id|integer|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :groups_users
- has_many :messages
  

## Itemsテーブル

|Column|Type|Options|
|------|----|-------|
|category_id|string/integer|null: false|
|user_id|string/integer|null: false|
|name|string/integer|null: false|
|explain|string/integer|null: false|
|state|string/integer|null: false|
|charge_state|string/integer|null: false|
|region|string|null: false|
|days|integer|null: false|
|price|integer|null: false|
|brand_id|integer|null: false|




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
|name|references|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user