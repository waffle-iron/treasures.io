Rails.application.routes.draw do
  resources :islands, only: :index
  root 'islands#index'
end
