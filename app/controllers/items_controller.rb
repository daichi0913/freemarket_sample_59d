class ItemsController < ApplicationController
  def new
    @categories = Category.all
  end
end
