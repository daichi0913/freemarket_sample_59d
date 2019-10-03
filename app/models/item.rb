class Item < ApplicationRecord
  has_many :item_images
  accepts_nested_attributes_for :item_images
  has_one :deal
  belongs_to :user,optional: true
  belongs_to :category,optional: true
  belongs_to :brand, optional: true
  belongs_to :region

end
