@maskers.each do |masker|
    json.set! masker.id do 
        json.extract! masker, :id, :user_id, :location, :bio, :price
        json.extrac! masker.user
        json.photoUrl url_for(masker.photo)
        json.
    end
end
