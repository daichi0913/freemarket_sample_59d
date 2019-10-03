class ItemsController < ApplicationController
  before_action :new
  def new
    categories = Category.where(parent_id: nil)
    region_id = params[:id].to_i
    @regions = Region.all
    # @item_images = Item_image.create
    @item_image = ItemImage.new
    @item = Item.new
    5.times { @item.item_images.build }
  end

  
  def show
    @item = Item.find(params[:id])

  end

  def create
    Item.create(create_params)
    binding.pry
    redirect_to root_path
  end

  private
    def create_params
    params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brand_id,category_id: :category_select,item_images_attributes: [:image] ).merge(user_id: params[:id])
    end
end
