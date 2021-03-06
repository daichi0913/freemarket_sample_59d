Rails.application.routes.draw do
  get 'user_detail/edit'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    omniauth_callbacks: "users/omniauth_callbacks"
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'toppages#index'
  resources :toppages, only: [:index]  do
    collection do 
      get 'search'
    end
  end
  resources :users do
    member do
      get :logout
      get :sms_confirmation
      get :address
      get :credit_card
      post :address
      post :credit_card
      get :finish
      get :credit_card_registration
    end
    resources :items, only: [:index, :new, :edit]
  end
  resources :items, except: [:index, :new, :edit] do
    resources :deals do
      collection do
        post 'purchase'
      end
    end
  end
  resources :items, except: [:index, :new, :edit]
  resources :item_images, only: [:new,:create, :destroy]
  namespace :api do
    resources :categories, only: :index, defaults: { format: 'json' }
  end 
  resources :card, only: [:new, :show] do
    collection do
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end

  
end

