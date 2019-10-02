class ToppagesController < ApplicationController
  def index
    @categories = Category.all
    # @posts = Post..order(created_at: :desc)
    # @posts = Post.page(params[:page]).per(10)


    @items = Item.where(params[:user]).limit(1000).order("created_at DESC")
    @item_ladies = []
    @item_mens = []
    # @item_appliances = Item.per(10).order("created_at DESC")
    # @item_toys = Item.per(10).order("created_at DESC")
    # @item_mens = Item.per(10).order("created_at DESC")
    @items.each do |item|
      if item.category.parent.parent.name == "レディース"
        if(@item_ladies.length < 10)
          @item_ladies << item
        end
      elsif item.category.parent.parent.name == "メンズ"
        if(@item_mens.length < 10)
          @item_mens << item
        end
      end
    end
    # binding.pry
  end
end