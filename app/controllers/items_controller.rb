class ItemsController < ApplicationController
  before_action :call_item, except: [:index, :new, :create]
  skip_before_action :authenticate_user!, only: [:show]
  
  def index
    @categories = Category.all
    @items = Item.where("user_id = #{current_user.id}")
  end

  def new
    @categories = Category.where(parent_id: nil)
    @regions = Region.all
    @item_image = ItemImage.new
    @item = Item.new
    @item.item_images.build
  end

  def create
    @item = Item.new(create_params)
    if @item.user_id == current_user.id && params.require(:item)[:item_images_attributes].present?
      if @item.save
        redirect_to root_path
        return
      else
        render_new
      end
    end
    redirect_to new_user_item_path(current_user)
  end
  
  def show
    @categories = Category.all
  end

  def edit
    @item.item_images.build
    @regions = Region.all
    @categories = Category.where(parent_id: nil)
  end

  def update
    if @item.user_id == current_user.id && params.require(:item).permit(item_images_attributes: [:image]).present?
      if @item.update(update_params)
        redirect_to root_path
        return
      else
        redirect_to edit_user_item_path(current_user)
      end
    end
  end

  def destroy
    # アイテムの削除
    if current_user.id == @item.user.id
      if @item.destroy
        redirect_to root_path
      else
        render_show
      end
    end
    
  end
  
  private
    def create_params
      params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brandname,:category_id,item_images_attributes: [:image] ).merge(user_id: current_user.id)
    end
    def update_params
      params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brandname,:category_id,item_images_attributes: [:image, :_destroy, :id] ).merge(user_id: current_user.id)

      # if params.require(:item).permit(item_images_attributes: [:image]).present?

      #   params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brandname,:category_id,item_images_attributes: [:image] ).merge(user_id: current_user.id)
      # else
      #   return params.require(:item).permit(:name,:size,:item_status,:shipping_fee,:days,:price,:explain,:region_id,:brandname,:category_id).merge(user_id: current_user.id)
      # end
    end
    def call_item
      @item = Item.find(params[:id])
    end

    def move_to_signup
      redirect_to new_user_session_path unless user_signed_in?
    end
end
