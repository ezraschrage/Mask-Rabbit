class CreateMaskerCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :masker_categories do |t|

      t.timestamps
    end
  end
end
