class Item < ApplicationRecord

  has_many :item_images
  has_one :deal
  belongs_to :user
  belongs_to :category
  belongs_to :brand
  belongs_to :region

end
