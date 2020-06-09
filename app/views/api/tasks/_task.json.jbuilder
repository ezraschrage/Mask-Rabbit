
    json.extract! task, :id, :category_id, :length_of_task, :date, :time, :per_hr,
            :user_id, :masker_id, :description, :start_address, :end_address,
            :vehicle_requirements, :interest
    json.extract! task.masker, :bio
    json.extract! task.masker.user, :first_name, :last_name
    json.photoUrl url_for(task.masker.photo)
