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
#
class Masker < ApplicationRecord

    validates :user_id, :location, :bio, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :masker_categories,
        foreign_key: :masker_id,
        class_name: :MaskerCategory

    has_many :availability,
        foreign_key: :masker_id,
        class_name: :MaskerDay

    has_many :categories,
        through: :masker_categories,
        source: :category

end
