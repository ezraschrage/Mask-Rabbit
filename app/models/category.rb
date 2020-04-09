# == Schema Information
#
# Table name: categories
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Category < ApplicationRecord
    validates :name, :description, presence: true

    has_many :masker_categories
    has_many :tasks
end
