# == Schema Information
#
# Table name: tasks
#
#  id                   :bigint           not null, primary key
#  category_id          :integer
#  length_of_task       :string           not null
#  date                 :datetime         not null
#  per_hr               :integer          not null
#  user_id              :integer          not null
#  masker_id            :integer          not null
#  description          :string           not null
#  start_address        :string           not null
#  end_address          :string
#  vehicle_requirements :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  interest             :string           not null
#
class Task < ApplicationRecord

    validates :length_of_task, :date, :per_hr, :user_id,
        :masker_id, :description, :start_address, :vehicle_requirements,
        :interest, presence: true
    validates :per_hr, numericality: { greater_than: 0 }

    has_one :category,
        foreign_key: :category_id,
        class_name: :Category

    belongs_to :masker,
        foreign_key: :masker_id,
        class_name: :Masker

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

        


end
