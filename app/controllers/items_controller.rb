class ItemsController < ApplicationController
  before_action :new
  def new
    @categories = Category.where(parent_id: nil)
    region_id = params[:id].to_i
    @regions = Region.all
    @item_ladies = Item.find(@item.category.parent.parent.name = "レディース").per(10).order("created_at DESC")
    # @item_mens = Item.per(10).order("created_at DESC")
    # @item_appliances = Item.per(10).order("created_at DESC")
    # @item_toys = Item.per(10).order("created_at DESC")
    # @item_mens = Item.per(10).order("created_at DESC")


    # @item_images = Item_image.create


    @item_image = ItemImage.new
    @item = Item.new
    5.times { @item.item_images.build }


  end
  
  def show
    @item = Item.find(params[:id])

  end

  def create
    binding.pry
  end

  # private
  #   def create_params
  #   params.require(:item).permit(item_image_attributes: [:image])
  #   end
end
