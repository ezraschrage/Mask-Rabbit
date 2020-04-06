class CreateMaskerDays < ActiveRecord::Migration[5.2]
  def change
    create_table :masker_days do |t|

      t.timestamps
    end
  end
end
