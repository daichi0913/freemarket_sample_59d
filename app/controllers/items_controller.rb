class ItemsController < ApplicationController
  before_action :call_item, except: :new
  def new
    @categories = Category.where(parent_id: nil)
    @regions = Region.all
    @item_image = ItemImage.new
    @item = Item.new
    10.times { @item.item_images.build }
  end

  def create
    @item = Item.new(create_params)
    Item.create(create_params)
    redirect_to root_path
  end
  
  def show
  end

  def edit
    @regions = Region.all
    @categories = Category.where(parent_id: nil)
  end

  def update
    if @item.user_id == current_user.id
      if @item.update(update_params)
        redirect_to root_path
      else
        render_edit
      end

    end
      redirect_to root_path
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
  

  def purchase
    Payjp.api_key = PAYJP_SECRET_KEY
    Payjp::Charge.create(currency: 'jpy', amount: 1000, card: params['payjp-token'])
    redirect_to root_path, notice: "支払いが完了しました"
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
    def call_item
      @item = Item.find(params[:id])
    end
end
