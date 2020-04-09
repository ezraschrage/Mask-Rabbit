class UpdateCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :low_avg, :integer, null: false
    add_column :categories, :high_avg, :integer, null: false
  end
end
