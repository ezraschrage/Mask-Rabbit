class CreateMaskerCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :masker_categories do |t|

      t.integer :masker_id, null: false
      t.integer :category_id, null: false
      t.integer :base_rate, null: false

      t.timestamps
    end
  end
end
