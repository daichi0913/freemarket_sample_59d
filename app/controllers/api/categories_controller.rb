class Api::CategoriesController < ApplicationController
  def index
    # 取得したグループでのメッセージ達から、idがlast_message_idよりも新しい(大きい)メッセージ達のみを取得
    category_id = params[:id].to_i
    @categories = Category.where(parent_id: category_id)
    # binding.pry

    # # 取得したグループでのメッセージ達から、idがlast_message_idよりも新しい(大きい)メッセージ達のみを取得
    # @messages = group.messages.includes(:user).where("id > #{last_message_id}")
  end
end