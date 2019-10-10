class UsersController < ApplicationController
  before_action :call_categories
  before_action :move_to_signup, except: [:new]

  def index

  end

  def new
    
  end

  def create
    
  end

  def edit
  
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

  def move_to_signup
    redirect_to new_user_session_path unless user_signed_in?
  end

end
