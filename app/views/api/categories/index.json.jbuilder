@categories.each do |category|
    json.set! category.id do 
        json.extract! category, :id, :name, :description, :low_avg, :high_avg
        json.photoUrl url_for(category.photo)
    end
end
