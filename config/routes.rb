Rails.application.routes.draw do
  resources :forecasts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "forecasts#new"
end
