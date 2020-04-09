# == Schema Information
#
# Table name: tasks
#
#  id                   :bigint           not null, primary key
#  category_id          :integer          not null
#  length_of_task       :integer          not null
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
#
class Task < ApplicationRecord

    # validates :category_id, :length_of_task, :date,


end
