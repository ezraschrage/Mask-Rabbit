@maskers.each do |masker|
    json.set! masker.id do 
        json.extract! category, :id, :name, :description, :low_avg, :high_avg
        json.photoUrl url_for(masker.photo)
    end
end
