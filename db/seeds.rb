# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

require 'open-uri'

Category.destroy_all
Masker.destroy_all
User.destroy_all
Task.destroy_all

user1 = User.create!(email: "guest@guest.com", first_name: "Alex", last_name: "Johnson", zip: 12345, password: "abcdef")
user2 = User.create!(email: "a@a.com", first_name: "Andrew", last_name: "Aarons", zip: 12345, password: "abcdef")
user3 = User.create!(email: "b@b.com", first_name: "Ben", last_name: "Bradly", zip: 12345, password: "abcdef")
user4 = User.create!(email: "c@c.com", first_name: "Catherine", last_name: "Calloway", zip: 12345, password: "abcdef")
user5 = User.create!(email: "d@d.com", first_name: "Dana", last_name: "Davidson", zip: 12345, password: "abcdef")
user6 = User.create!(email: "e@e.com", first_name: "Ed", last_name: "Edwards", zip: 12345, password: "abcdef")
user7 = User.create!(email: "f@f.com", first_name: "Frank", last_name: "Frankers", zip: 12345, password: "abcdef")
user8 = User.create!(email: "g@g.com", first_name: "Georgia", last_name: "Gil", zip: 12345, password: "abcdef")


cat1 = Category.create!(name: "Assemble a Table/Desk", 
    description: "Our Masker will help assemble your furniture around the house. They are even prepared to work outside if your home is too small to maintain social distancing.", 
    low_avg: 59, high_avg: 148, )
cat2 = Category.create!(name: "Mount a TV or Mirror", 
    description: "Let one of our Maskers ensure that anything you put up on your wall will stay up. Let your mirror or TV enable the best self-care possible for yourself.", 
    low_avg: 59, high_avg: 106)
cat3 = Category.create!(name: "Move boxes via Truck", 
    description: "Have a large amount stuff you need transported but don't have sufficiently big vehicle? Our Masker will help get your things to where they need to be, with vehicles thorougly disinfected after every delivery.", 
    low_avg: 53, high_avg: 147)
cat4 = Category.create!(name: "Clean Bathroom/Kitchen", 
    description: "Your bathroom and kitchen deserves to be clean now more than ever. Let our Masker help create a well organized and disinfected space for you.", 
    low_avg: 73, high_avg: 141)
cat5 = Category.create!(name: "Fix a Running Toilet", 
    description: "The last thing you want right now is broken toilet. Let one of our Maskers get your toilet's plumbing back to working ASAP.", 
    low_avg: 76, high_avg: 182)
cat6 = Category.create!(name: "Office/Home Delivery", 
    description: "Whether it's groceries, laundry, or medication, our Maskers will pick up the items you specifcy. Great for people who are not able to leave their houses. You can also be sure our Masker will drop off the items while maintining proper social distancing.", 
    low_avg: 29, high_avg: 61)
cat7 = Category.create!(name: "Lift Furniture Upstairs", 
    description: "Getting new furntiure or just want to rearrange what you have? Let one of our Maskers come and help you organize your home the way you'd like.",
    low_avg: 46, high_avg: 96)
cat8 = Category.create!(name: "Plant Flowers", 
    description: "Some of our Masker's want to put their green thumb to your benefit. With spring around the corner, you can have the help you need to make sure your yard is full of life.",
    low_avg: 47, high_avg: 141)

catfile1 = open("https://mask-rabbit-seed.s3.amazonaws.com/drill.jpg")
catfile2 = open("https://mask-rabbit-seed.s3.amazonaws.com/tv.jpg")
catfile3 = open("https://mask-rabbit-seed.s3.amazonaws.com/van.jpg")
catfile4 = open("https://mask-rabbit-seed.s3.amazonaws.com/bathroom.jpg")
catfile5 = open("https://mask-rabbit-seed.s3.amazonaws.com/sweep.jpg")
catfile6 = open("https://mask-rabbit-seed.s3.amazonaws.com/tp.jpg")
catfile7 = open("https://mask-rabbit-seed.s3.amazonaws.com/moving.jpg")
catfile8 = open("https://mask-rabbit-seed.s3.amazonaws.com/brown.jpg")

cat1.photo.attach(io: catfile1, filename: "drill.jpg")
cat2.photo.attach(io: catfile2, filename: "tv.jpg")
cat3.photo.attach(io: catfile3, filename: "van.jpg")
cat4.photo.attach(io: catfile4, filename: "bathroom.jpg")
cat5.photo.attach(io: catfile5, filename: "sweep.jpg")
cat6.photo.attach(io: catfile6, filename: "tp.jpg")
cat7.photo.attach(io: catfile7, filename: "moving.jpg")
cat8.photo.attach(io: catfile8, filename: "brown.jpg")

mask1 = Masker.create!(user_id: 2, location: "Brooklyn", bio: "Ready to help you out! You can always count on Andrew", price: 50)
mask2 = Masker.create!(user_id: 4, location: "Brooklyn", bio: "My name is Catherine. If you want service done well with a smile, I'm your gal!", price: 40)
mask3 = Masker.create!(user_id: 5, location: "Brooklyn", bio: "An expert in PPE, highly rated, always courteous. Let's work together!", price: 60)
mask4 = Masker.create!(user_id: 8, location: "Brooklyn", bio: "I have been doing odd jobs for years and MaskRabbit lets me help more people out. Let's go!", price: 45)

maskfile1 = open("https://mask-rabbit-seed.s3.amazonaws.com/yellow2.jpg")
maskfile2 = open("https://mask-rabbit-seed.s3.amazonaws.com/woman2.jpg")
maskfile3 = open("https://mask-rabbit-seed.s3.amazonaws.com/green.jpg")
maskfile4 = open("https://mask-rabbit-seed.s3.amazonaws.com/suit.jpg")

mask1.photo.attach(io: maskfile1, filename: "yellow2.jpg")
mask2.photo.attach(io: maskfile2, filename: "woman2.jpg")
mask3.photo.attach(io: maskfile3, filename: "green.jpg")
mask4.photo.attach(io: maskfile4, filename: "suit.jpg")