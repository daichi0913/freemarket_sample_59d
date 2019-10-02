class ToppagesController < ApplicationController
  def index
    @categories = Category.all
    # @posts = Post..order(created_at: :desc)
    # @posts = Post.page(params[:page]).per(10)

  end

end