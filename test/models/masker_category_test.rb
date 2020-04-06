# == Schema Information
#
# Table name: masker_categories
#
#  id          :bigint           not null, primary key
#  masker_id   :integer          not null
#  category_id :integer          not null
#  base_rate   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class MaskerCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
