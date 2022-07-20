# == Schema Information
#
# Table name: maskers
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  location   :string           not null
#  bio        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  price      :integer          not null
#
require 'test_helper'

class MaskerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
