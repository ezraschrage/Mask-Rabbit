class UpdateTasksConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:tasks, :category_id, true)
  end
end
