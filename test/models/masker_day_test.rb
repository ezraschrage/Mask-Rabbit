# == Schema Information
#
# Table name: masker_days
#
#  id         :bigint           not null, primary key
#  masker_id  :string           not null
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class MaskerDayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
