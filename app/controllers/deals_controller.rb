class DealsController < ApplicationController
  def new
    @item = Item.find(params[:item_id])
  end

  def purchase
    item = Item.find(params[:item_id])
    
    return root_path if item.deal.present?
    deal = Deal.new(deal_params)

    unless deal.save()
      redirect_to root_path
      return
    end

    if item.user.id != current_user.id &&
      Payjp.api_key = Rails.application.credentials.PAYJP_PRIVATE_KEY
      Payjp::Charge.create(currency: 'jpy', amount: item.price.to_i, card: params['payjp-token'])
      redirect_to root_path, notice: "支払いが完了しました"
    else
      redirect_to logout_user_path(current_user.id)
    end
  end

  private
  def deal_params
    params.permid(:item_id).merge(user_id: current_user.id, status: "sold")
  end

end
