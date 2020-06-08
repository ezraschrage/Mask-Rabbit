class Api::UsersController < ApplicationController
    
    before_action :require_logged_in, only: [ :edit ]

    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            
            render json: @user.errors.full_messages, status: 422
        end
    end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = User.find(user_params[:id])
    if @user.is_password?(user_params[:old_password])
        if @user.update(email: user_params[:email], password: user_params[:password], first_name: user_params[:first_name],
        last_name: user_params[:last_name], zip: user_params[:zip])
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    else
         return (render json: ["Please enter correct password"], status: 422)
    end

  end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :zip, :old_password, :id)
    end

end
