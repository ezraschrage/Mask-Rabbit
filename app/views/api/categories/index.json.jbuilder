@categories.each do |category|
    json.set! category.id do 
        json.extract! category, :name, :description, :low_avg, :high_avg
    end
end

#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  low_avg     :integer          not null
#  high_avg    :integer          not null