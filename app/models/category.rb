# == Schema Information
#
# Table name: categories
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  low_avg     :integer          not null
#  high_avg    :integer          not null
#
class Category < ApplicationRecord
    validates :name, :description, presence: true

    has_many :masker_categories,
        foreign_key: :category_id,
        class_name: :MaskerCategory

    has_many :tasks,
        foreign_key: :category_id,
        class_name: :Task

    has_many :maskers,
        through: :masker_categoreis,
        source: :masker
end
