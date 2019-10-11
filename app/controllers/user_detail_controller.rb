class UserDetailController < ApplicationController
  before_action :call_categories
  before_action :call_regions
  before_action :authenticate_user!

  def edit
    @user_detail = current_user.user_detail
  end

  private
  def call_categories
    @categories = Category.all
  end
  def call_regions
    @regions = Region.all
  end
end
