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
class MaskerDay < ApplicationRecord

    validates :masker_id, :start_time, :end_time, presence: true

    belongs_to :masker,
        foreign_key: :masker_id,
        class_name: :Masker

end
