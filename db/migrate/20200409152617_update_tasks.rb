class UpdateTasks < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :per_her, :per_hr
  end
end
