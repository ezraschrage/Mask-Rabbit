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

  def edit
    @user = User.find(params[:id])
    if current_user.id === @user.id && @user.update(user_params)
        render :show
    else
        render json: @user.errors.full_messages, status: 422
    end

  end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :zip)
    end

end
