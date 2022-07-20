class UpdateZipUser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :zip, :string, null: false
  end
end
