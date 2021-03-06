# MaskRabbit


![Masked Rabbit](https://images.squarespace-cdn.com/content/v1/5c8fbfe87d0c914f25ad6fa4/1584113952445-ZB8MYADTXJGGIYRXMPUB/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Rabbit+with+mask.jpg?format=1500w)

### Description

MaskRabbit is a clone of the website TaskRabbit that emphasizes social distancing and PPE. 
A user will have the ability to create an account, create details for a task, 
and those criteria will be used to see if there are any available other users 
("Maskers") who are willing to help them.

[Check it out here!](https://maskrabbit.herokuapp.com/)

### Framework

MaskRabbit was built with the following technologies:
- Ruby 2.5.1
- Rails 5.2.3
- PostgreSQL 12
- Bcrypt
- JQuery
- React
- Redux
- Amazon S3

### Website Features

MaskRabbit attempts to replicate the styling and layout of the TaskRabbit website 
wherever possible. This was accomplished using the TaskRabbit logo as a template 
and finding icons that are similar to ones displayed on the page.

![MaskRabbit categories example](app/assets/images/screenshot_categories.png "MaskRabbit categories example")

![MaskRabbit login example](app/assets/images/screenshot_login.png "MaskRabbit login example")

![MaskRabbit splash example](app/assets/images/screenshot_splash.png "MaskRabbit splash example")

![MaskRabbit task creation example](app/assets/images/screenshot_task_creation.png "MaskRabbit task creation example")

One addition to the website is the ability to use a demo account for accessibility, though it is possible to create create your own personal account. <br>

### Backend Features

In order to minimize the number of requests, a series of joins tables were created
```
  class MaskerCategory < ApplicationRecord
    validates :masker_id, :category_id, :base_rate, presence: true
    validates :base_rate, numericality: { greater_than: 0 }

    belongs_to :masker,
        foreign_key: :masker_id,
        class_name: :Masker

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category
  end

class MaskerDay < ApplicationRecord

    validates :masker_id, :start_time, :end_time, presence: true

    belongs_to :masker,
        foreign_key: :masker_id,
        class_name: :Masker

end
```

### Features to be Implemented
- Masker sign up and ability to edit info.
- Address verification and ability to see if there are available Maskers to that address
- Account page to view your tasks
- Given enough Maskers, ability to calculate average price for a particular task.
- Mobile screen interface
- OmniAuth implementation

### Attributions

["Masked Rabbit"](https://images.squarespace-cdn.com/content/v1/5c8fbfe87d0c914f25ad6fa4/1584113952445-ZB8MYADTXJGGIYRXMPUB/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Rabbit+with+mask.jpg?format=1500w) from The Avian and Exotic Animal Clinic

["Ecommerce, price, shop, tag icon"](https://www.iconfinder.com/icons/4177555/ecommerce_price_shop_tag_icon) by Jordan Alfarishy is licensed under CC BY 3.0

["Gift, present icon"](https://www.iconfinder.com/icons/172472/gift_present_icon) by Visual Pharm licensed under CC BY-ND 3.0

["Half star"](https://www.iconfinder.com/icons/49625/half_rating_star_icon) by Custom Icon Design

["Full star"](https://www.iconfinder.com/icons/49624/bookmark_favorite_full_rating_star_icon) by Custom Icon Design

["Animal, bunny, domestic, mammal, pet, rabbit, zoo icon"](https://www.iconfinder.com/icons/3406425/animal_bunny_domestic_mammal_pet_rabbit_zoo_icon) by Chanut is Industries under CC BY 3.0

["Woman in Mask Holding Toilet Paper"](https://www.pexels.com/photo/woman-in-mask-holding-toilet-paper-3962337/) by Anna Shvets

["Woman In Grey Shirt Holding Brown Cardboard Box"](https://www.pexels.com/photo/woman-in-grey-shirt-holding-brown-cardboard-box-761999/) by Andrea Piacquadio

["Flat Screen Television"](https://www.pexels.com/photo/flat-screen-television-1201996/) by JESHOOTS.com

["Person Using Dewalt Cordless Impact Driver on Brown Board"](https://www.pexels.com/photo/person-using-dewalt-cordless-impact-driver-on-brown-board-1249611/)
 by Bidvine

 ["Child in white hoodie holding white string lights"](https://unsplash.com/photos/YP3H19jkOwk) by CDC

 ["Man in gray hoodie and blue denim jeans standing on brown wooden parquet flooring"](https://unsplash.com/photos/jjrXvzbqC5E) by CDC

 ["Gray vehicle on black concrete road at daytime"](https://unsplash.com/photos/E7JP5mFbvBY) by Jon Tyson

 ["Blue Honest plastic spray bottle"](https://unsplash.com/photos/Ua9AK-pZ5cw) by The Honest Company

["Man in white shirt planting at daytime"](https://unsplash.com/photos/1JgUGDdcWnM) by Jed Owen

["Man in white dress shirt wearing blue face mask"](https://unsplash.com/photos/UhOIDLhhIcI) by H Shaw

