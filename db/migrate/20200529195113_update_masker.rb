class UpdateMasker < ActiveRecord::Migration[5.2]
  def change
        add_column :maskers, :price, :integer, null: false
  end
end
