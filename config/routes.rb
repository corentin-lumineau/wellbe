Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'


  resources :sessions, only: [:new]
  get '/sessions/choice', to: 'sessions#choice'
end

  