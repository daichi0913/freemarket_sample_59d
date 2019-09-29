class ItemsController < ApplicationController
  before_action :new
  def new
    @categories = Category.where(parent_id: nil)
  end
  
  def show

  end

  def create

  end
end
