class Category < ApplicationRecord
  has_many :brands, through: :category_brands
  has_many :category_brands
  has_many :items
  belongs_to :parent, class_name: "Category"
  has_many :categories, foreign_key: "parent_id"

end
