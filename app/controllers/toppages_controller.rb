class ToppagesController < ApplicationController
  def index
    @categories = Category.all
  end


  def show
    @posts = Post.all.order(created_at: :desc)
    @posts = Post.page(params[:page]).per(5)
  end
end