class Api::MaskerController < ApplicationController

    def index
        @maskers = Masker.all
        render :index
    end

    def show
        @masker = Masker.find(params[:id])
        render :show
    end

    def user_params
        params.require(:masker).permit(:user_id, :location, :bio, :last_name, :zip)
    end
end
