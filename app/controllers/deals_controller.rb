class DealsController < ApplicationController
  before_action :check_current_user

  def new
    @item = Item.find(params[:item_id])
  end

  def purchase
    item = Item.find(params[:item_id])
    
    return root_path if item.deal.present?
    deal = Deal.new(deal_params)
    Payjp.api_key = Rails.application.credentials.PAYJP_PRIVATE_KEY
    Payjp::Charge.create(currency: 'jpy', amount: item.price.to_i, card: params['payjp-token'])
    redirect_to root_path, notice: "支払いが完了しました"

    unless deal.save()
      redirect_to root_path
      return
    end
  end

  private
  def check_current_user
    item = Item.find(params[:item_id])
    if item.user.id == current_user.id 
      redirect_to logout_user_path(current_user.id)
    end
  end
  def deal_params
    params.permit(:item_id).merge(user_id: current_user.id, status: "sold")
  end

end
