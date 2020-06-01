@maskers.each do |masker|
    json.set! masker.id do 
        json.extract! masker, :id, :user_id, :location, :bio, :price
        json.photoUrl url_for(masker.photo)
    end
end
