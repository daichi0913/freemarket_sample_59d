class ItemsController < ApplicationController
  before_action :new
  def new
    @categories = Category.where(parent_id: nil)
    region_id = params[:id].to_i
    @regions = Region.all

  end
  
  def show
  
  end

end
