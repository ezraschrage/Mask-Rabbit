json.set! task.id do
    json.extract! task, :id, :category_id, :length_of_task, :date, :time, :per_hr,
            :user_id, :masker_id, :description, :start_address, :end_address,
            :vehicle_requirements, :interest
end