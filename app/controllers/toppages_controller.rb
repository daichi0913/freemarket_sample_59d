class ToppagesController < ApplicationController
  def index
    @categories = Category.all
  end
end
