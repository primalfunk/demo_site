Rails.application.routes.draw do
  namespace :api do
    resources :weather
    resources :comics
  end

  # get '*other', to: 'static#index'
end
