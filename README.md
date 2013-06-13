### dbc Sinatra skeleton with personal tweaks

*TO DO*

- Error handling

------

*Requirements*

The ```/login``` and ```/signup``` GET/POST routes and views make some assumptions about your app.

- You have a ```Users``` table (model is provided, sans validations)
- Users login with an email and password (as opposed to username and password)
- ```Users``` includes fields for ```email``` and ```password_hash``` (passed in through ```params``` with ```password``` processed by bcrypt)
- You like AJAX

------

*Includes*

- bcrypt
- Open Sans as base font, Bitter as paragraph font (from Google Fonts)
- JavaScript template for AJAX with click event handlers
- Fixed position top nav bar
- Sass
- Slim syntax (in favor of erb; erb still available under /views/erb)