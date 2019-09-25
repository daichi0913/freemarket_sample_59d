class ItemsController < ApplicationController
  def new
    @categories = Category.where(parent_id: nil)
  end
end
