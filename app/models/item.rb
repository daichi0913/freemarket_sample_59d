class Item < ApplicationRecord
  # dependent: :destroyによりitem消した時に一緒に消える
  has_many :item_images, dependent: :destroy
  accepts_nested_attributes_for :item_images
  has_one :deal
  belongs_to :user,optional: true
  belongs_to :category,optional: true
  belongs_to :brand, optional: true
  belongs_to :region

  enum item_status: {
    "新品、未使用": "新品、未使用", 
    "未使用に近い": "未使用に近い", 
    "目立った傷や汚れなし": "目立った傷や汚れなし", 
    "やや傷や汚れあり": "やや傷や汚れあり", 
    "傷や汚れあり": "傷や汚れあり", 
    "全体的に状態が悪い": "全体的に状態が悪い", 
  }
  enum days: {
    "1〜2日で発送": "1〜2日で発送", 
    "2〜3日で発送": "2〜3日で発送", 
    "4〜7日で発送": "4〜7日で発送", 
  }
end
