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
class MaskerCategory < ApplicationRecord

    validates :masker_id, :category_id, :base_rate, presence: true
    validates :base_rate, numericality: { greater_than: 0 }

    belongs_to :masker,
        foreign_key: :masker_id,
        class_name: :Masker

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category

end
