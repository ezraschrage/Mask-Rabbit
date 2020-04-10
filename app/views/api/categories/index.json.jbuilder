@categories.each do |category|
    json.set! category.id do 
        json.extract! category, :name, :description, :low_avg, :high_avg
    end
end