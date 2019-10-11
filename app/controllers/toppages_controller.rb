class ToppagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @categories = Category.all
    # @posts = Post..order(created_at: :desc)
    # @posts = Post.page(params[:page]).per(10)


    @items = Item.where(params[:user]).limit(1000).order("created_at DESC")
    @item_ladies = []
    @item_mens = []
    @item_appliances = []
    @item_toys = []
    @item_brand_chanel= []
    @item_brand_lv= []
    @item_brand_supreme = []
    @item_brand_nike = []

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

      elsif item.category.parent.parent.name == "家電・スマホ・カメラ"
        if(@item_appliances.length < 10)
          @item_appliances << item
        end

      elsif item.category.parent.parent.name == "おもちゃ・ホビー・グッズ"
        if(@item_toys.length < 10)
          @item_toys << item
        end
      end
      if item.brandname == "シャネル"
        if(@item_brand_chanel.length < 10)
          @item_brand_chanel << item
        end

      elsif item.brandname == "ルイヴィトン"
        if(@item_brand_lv.length < 10)
          @item_brand_lv << item
        end

      elsif item.brandname == "シュプリーム"
        if(@item_brand_supreme.length < 10)
          @item_brand_supreme << item
        end

      elsif item.brandname == "ナイキ"
        if(@item_brand_nike.length < 10)
          @item_brand_nike << item
        end

      end
    end
  end
  def search
    @categories = Category.all
  end
    # binding.pry
end