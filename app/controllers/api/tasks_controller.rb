class Api::TasksController < ApplicationController
    

    def create
        @task = Task.new(task_params)
        if @task.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
       
    end

    def show
        @task = Task.find(params[:id])      
    end

    def destroy
        @task = Task.find(params[:id])
        if @task.destroy
            render "api/tasks/show"
        else
            render json: @user.errors.full_messages, status: 422
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
