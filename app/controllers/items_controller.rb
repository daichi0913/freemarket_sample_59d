class ItemsController < ApplicationController
  before_action :new
  def new
    @categories = Category.where(parent_id: nil)
    region_id = params[:id].to_i
    @regions = Region.all
    @item_ladies = Item.find(category_id@item.category.parent.parent.name)per(10).order("created_at DESC")
    @item_mens = Item.per(10).order("created_at DESC")
    @item_appliances = Item.per(10).order("created_at DESC")
    @item_toys = Item.per(10).order("created_at DESC")
    @item_mens = Item.per(10).order("created_at DESC")


    # @item_images = Item_image.create

  end
  
  def show
    @item = Item.find(params[:id])

  end

  def create

  end
end
