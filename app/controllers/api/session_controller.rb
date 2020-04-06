class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:email]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["No sign out necessary"], status: 404
        end
    end


end
