class UpdateTasksWithInterest < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :interest, :string, null: false
    change_column :tasks, :length_of_task, :string, null: false
  end
end
