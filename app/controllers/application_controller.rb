class ApplicationController < ActionController::Base
  before_action :basic_auth, if: :production?
  layout :layout_by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname, :image, user_detail_attributes: [:family_name_kana, :family_name_kanji, :first_name_kana, :first_name_kanji, :birth_date]])
    devise_parameter_sanitizer.permit(:account_update, keys: [:nickname, :image])
  end
  
  private

  def production?
    Rails.env.production?
  end
  
  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_USER"] && password == ENV["BASIC_AUTH_PASSWORD"]
    end
  end
  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end

end