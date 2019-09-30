class UsersController < ApplicationController
  before_action :call_categories
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


  def credit_card_registration
    
  end

  def finish

  end

  private
  def call_categories
    @categories = Category.all
  end
end
