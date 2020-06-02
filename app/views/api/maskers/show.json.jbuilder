json.extract! @masker, :id, :user_id, :location, :bio, :price
json.extract! @masker.user, :first_name, :last_name
json.photoUrl url_for(@masker.photo)