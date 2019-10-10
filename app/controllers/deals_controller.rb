class DealsController < ApplicationController
  def new
    
  end

  def purchase
    Payjp.api_key = Rails.application.credentials.PAYJP_PRIVATE_KEY
    Payjp::Charge.create(currency: 'jpy', amount: 1000, card: params['payjp-token'])
    redirect_to root_path, notice: "支払いが完了しました"
  end
end
