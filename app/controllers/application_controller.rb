class ApplicationController < ActionController::Base
  layout :layout_by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname], :account_update, keys: [:image])
  end
  
  private

  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end

end