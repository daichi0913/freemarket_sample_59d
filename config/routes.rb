Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'toppages#index'
  resources :toppages, only: [:index]
  get   'users/:id'   =>  'users#show' 
end
