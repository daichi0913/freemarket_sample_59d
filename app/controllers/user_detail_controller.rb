class UserDetailController < ApplicationController
  before_action :call_categories
  before_action :call_regions

  def edit
  end

  private
  def call_categories
    @categories = Category.all
  end
  def call_regions
    @regions = Region.all
  end
end
