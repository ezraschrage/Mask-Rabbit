json.extract! @masker, :id, :user_id, :location, :bio, :price
json.photoUrl url_for(@masker.photo)