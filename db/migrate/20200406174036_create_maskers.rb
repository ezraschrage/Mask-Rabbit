class CreateMaskers < ActiveRecord::Migration[5.2]
  def change
    create_table :maskers do |t|

      t.integer :user_id, null: false
      t.string :location, null: false
      t.string :bio, null: false

      t.timestamps
    end
  end
end
