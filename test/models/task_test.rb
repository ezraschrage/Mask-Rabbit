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
require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
