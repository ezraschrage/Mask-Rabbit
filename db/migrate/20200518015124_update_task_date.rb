class UpdateTaskDate < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :date, :date, null: false
    add_column :tasks, :time, :string, null: false
    
  end
end
