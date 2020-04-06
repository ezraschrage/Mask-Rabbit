class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|

      t.integer :category_id, null: false
      t.integer :length_of_task, null: false
      t.datetime :date, null: false
      t.integer :per_her, null: false
      t.integer :user_id, null: false
      t.integer :masker_id, null: false
      t.string :description, null: false
      t.string :start_address, null: false
      t.string :end_address
      t.string :vehicle_requirements, null: false

      t.timestamps
    end

    add_index :tasks, :user_id
    add_index :tasks, :masker_id
  end
end
