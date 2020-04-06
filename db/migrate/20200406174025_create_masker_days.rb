class CreateMaskerDays < ActiveRecord::Migration[5.2]
  def change
    create_table :masker_days do |t|

      t.string :masker_id, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false

      t.timestamps
    end
  end
end
