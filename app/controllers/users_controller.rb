class UsersController < ApplicationController
  before_action :call_categories
  before_action :card_check, only: :credit_card
  # before_action :move_to_signup, except: [:new]
  skip_before_action :authenticate_user!, only: [:new]
  def index

  end

  def new
    
  end

  def create
    
  end

  def edit
    @user = User.find(params[:id])
  end

  def show
    
  end

  def logout
    
  end

  def sms_confirmation
    
  end

  def credit_card
  end


  def address
    @regions = Region.all
  end
  
  def credit_card_registration
    
  end

  def finish

  end

  private
  def call_categories
    @categories = Category.all
  end

  def card_check
    if current_user.card.present?
      redirect_to card_path
    end
  end
  # def move_to_signup
  #   redirect_to new_user_session_path unless authenticate_user?
  # end

end
