class ItemsController < ApplicationController
  before_action :new
  def new
    @categories = Category.where(parent_id: nil)
    region_id = params[:id].to_i
    @regions = Region.all
    # @item_images = Item_image.create

  end
  
  def show
    @item = Item.find(params[:id])

  end

  def create

  end
end
