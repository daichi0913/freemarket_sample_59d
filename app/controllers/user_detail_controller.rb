class UserDetailController < ApplicationController
  before_action :call_categories

  def edit
  end
  
  private
  def call_categories
    @categories = Category.all
  end
end
