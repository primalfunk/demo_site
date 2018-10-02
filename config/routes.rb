Rails.application.routes.draw do
  namespace :api do
    resources :weather
    resources :comics
  end

  root :to => 'index#index'
end
