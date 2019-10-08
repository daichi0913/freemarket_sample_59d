class ItemsController < ApplicationController
  before_action :new
  def new
    @categories = Category.where(parent_id: nil)
    region_id = params[:id].to_i
    @regions = Region.all
    # @item_images = Item_image.create
    @item_image = ItemImage.new
    @item = Item.new
    5.times { @item.item_images.build }
  end

  def create
    @item = Item.new(create_params)
    Item.create(create_params)
    redirect_to root_path
  end
  
  def show
    @item = Item.find(params[:id])
  end

 def edit
    @item = Item.find(params[:id])
  end

  def update
    item = Item.find(params[:id])
    if item.user_id == current_user.id
      item.update(update_params)
    end
      redirect_to root_path
  end

  def destroy
    # アイテムの削除s
    item = Item.find(params[:id])
    if current_user.id == item.user.id
      item.destroy
    end
    redirect_to root_path
    
  end
  def destroy2
    item = Item.find(params[:id])
    if current_user.id == item.user.id
      item.item_images.destroy_all
    end
  end
  
  private
    def create_params
    params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brandname,:category_id,item_images_attributes: [:image] ).merge(user_id: current_user.id)
    end
    def update_params
      if params[:item_images_attributes].present?
        return create_params
      else
        return params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brandname,:category_id).merge(user_id: current_user.id)
      end
    end
end
