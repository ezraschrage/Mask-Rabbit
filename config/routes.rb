Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :update ]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [ :index ]
    resources :tasks, only: [ :create, :destroy, :index ]
    resources :maskers, only: [ :index, :show ]
  end
  root "static_pages#root"
end
