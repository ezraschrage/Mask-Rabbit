class Api::TasksController < ApplicationController
    
    before_action :ensure_logged_in, only: [:new, :index, :destroy ]

    def create
        @task = Task.new(task_params)
        if @task.save
            render :show
        else
            render json: @task.errors.full_messages, status: 422
        end
       
    end

    def index
        @tasks = Task.where(user_id: current_user.id)    
    end

    def destroy
        @task = Task.find(params[:id])
        if @task.destroy
            render "api/tasks/show"
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    private

    def task_params
        params.require(:task).permit(:category_id, :length_of_task, :date, :per_hr,
            :user_id, :masker_id, :description, :start_address, :end_address,
            :vehicle_requirements
        )
    end

end
