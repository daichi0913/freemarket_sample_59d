Rails.application.routes.draw do
  get 'items/new'
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
    end
  end
  resources :items
  namespace :api do
    resources :categories, only: :index, defaults: { format: 'json' }
  end 

end
