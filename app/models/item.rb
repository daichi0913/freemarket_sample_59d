class Item < ApplicationRecord
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
end
