class DealsController < ApplicationController
  def new
    @item = Item.find(params[:item_id])
  end

  def purchase
    Payjp.api_key = Rails.application.credentials.PAYJP_PRIVATE_KEY
    item = Item.find(params[:item_id])
    Payjp::Charge.create(currency: 'jpy', amount: item.price.to_i, card: params['payjp-token'])
    redirect_to root_path, notice: "支払いが完了しました"
  end

end
