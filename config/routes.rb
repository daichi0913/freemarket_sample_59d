Rails.application.routes.draw do
  get 'card/new'
  get 'card/show'
  get 'user_detail/edit'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'toppages#index'
  resources :toppages, only: [:index]
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
    resources :items, only: [:new,:edit,:update] do
      member do
        delete 'destroy2'
      end
    end
  end
  resources :items, except: [:new, :edit]
  resources :item_images, only: [:new,:create, :destroy]
  namespace :api do
    resources :categories, only: :index, defaults: { format: 'json' }
  end 

  resources :items do
    collection do
      post 'purchase'
    end
  end
  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end
end
