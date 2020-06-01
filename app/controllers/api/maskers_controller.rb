class Api::MaskersController < ApplicationController

    def index
        @maskers = Masker.all
        render :index
    end

    def show
        @masker = Masker.find(params[:id])
        render :show
    end

end
