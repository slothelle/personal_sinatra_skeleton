## dbc Sinatra skeleton
*with some person tweaks!*

**TO DO**

- Error handling
- Refine AJAX to toggle login/signup form

------

#### Requirements

The ```/login``` and ```/signup``` GET/POST routes and views make some assumptions about your app. Namely, it **assumes that you have a Users table**.

- You have a ```Users``` table (model is provided, migration is not)
- Users login with an email and password (as opposed to username and password)
- ```Users``` includes fields for ```first_name```, ```last_name```, ```email```, and ```password_hash```
- ```email``` and ```password_hash``` are required
- ```email``` must be unique
- ```password_hash``` is passed in through ```params``` with ```password``` processed by bcrypt
- You like AJAX

------

#### Includes

- Password fun with bcrypt
- Open Sans as base font, Bitter as paragraph font
- JavaScript with AJAX for logging in and signing up users
- Fixed top nav bar
- Sticky footer
- Sass for CSS
- Slim syntax for (most) views
- A few erb files in views/erb