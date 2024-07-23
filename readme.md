# Chill app REST API

## Set up local server
1. git clone to local drive
2. run `npm i`
3. create .env file matching your configuration.

Sample `.env` file: 
```
NODE_ENV='development'
DB_USERNAME='root'
DB_PASSWORD='root'
DB_NAME='chill_api_database_development'
DB_HOSTNAME='127.0.0.1'
DIALECT='mysql'
JWT_SECRET='secretKey'
EMAIL_SERVICE='ethereal'
ETHEREAL_FROM_USER=''
ETHEREAL_PASSWORD=''
GMAIL_FROM_USER=''
GMAIL_PASSWORD=''
```

4. run `npx sequelize db:create` (if database does not exist yet)
5. run `npx sequelize db:migrate`
6. run `npx sequelize db:seed:all`
7. run `npm run dev` to run server locally


## API documentation


### Content

#### Endpoints

| Endpoint                                  | Method | Description                         | Authentication required |
| ----------------------------------------- | ------ | ----------------------------------- | ----------------------- |
| `/contents`                               | GET    | list all Contents                   | yes                     |
| `/contents/:id`                           | GET    | list one Content based on id        | yes                     |
| `/watchlists`                             | GET    | list all WatchLists                 | yes                     |
| `/watchlists/:id`                         | GET    | list one WatchList based on id      | yes                     |
| `/watchlists/:id`                         | PATCH  | edit one WatchList data based on id | yes                     |
| `/watchlists/:id`                         | DELETE | delete one WatchList based on id    | yes                     |
| `/watchlists`                             | POST   | create new WatchList                | yes                     |
| `/register`                               | POST   | create new user account             | no                      |
| `/login`                                  | POST   | login with email and password       | no                      |
| `/verify-email?verifaction_token=[token]` | GET    | verify email                        | no                      |
| `/upload`                                 | POST   | upload image                        | yes                     |


## Register new user
1. Send a `post` request to `/register` with the below fields in the body

| field            | data type |
| ---------------- | --------- |
| first_name       | string    |
| last_name        | string    |
| username         | string    |
| email            | string    |
| date_of_birth    | date      |
| avatar_image_url | string    |
| password         | string    |
2. User will be created in database (note, password will be hashed using bcrypt)
3. A verification email will be sent to the 'email' address specified during the `post` request.


## Verify email

Send `get` request to `/verify-email?verification_token=[token]`

* If verification_token is not found in the system: Invalid Verification Token
* If verification_token already verified and token is correct: Email Already Verified
* If verification_token not yet verified and token is correct: Email Verified Successfully

Note: if you already registered your email but you haven't verified, and you try to register again, you will be sent a new token.

## Login

### Method 1: postman
1. Send a `post` request to `/login` with the below fields in the body

| field            | data type |
| ---------------- | --------- |
| email            | string    |
| password         | string    |

2.  If the email + password combination is correct, the json web token will be returned and saved in cookie


### Method 2: login webpage
1. Open `/login` webpage
2. Enter email and password, submit form
3. If the email + password combination is correct, the json web token will be returned and saved in cookie


## Verify token middleware

In this API, the protected routes are: 

| resource          | method                             |
| ----------------- | ---------------------------------- |
| `/contents`       | GET                                |
| `/contents/:id`   | GET                                |
| `/watchlists`     | GET                                |
| `/watchlists`     | POST                               |
| `/watchlists/:id` | GET                                |
| `/watchlists`     | DELETE                             |
| `/watchlists`     | PATCH                              |
| `/upload`         | GET (note: returns log in webpage) |
| `/upload`         | POST                               |

When accessing these routes, verifyToken middleware will run and check if there is a valid token in:
1. a cookie, or
2. 'Autorization' field in request 'Headers' i.e. `Bearer [json web token]

If token is not valid (because expired / incorrect), user will not be able to access these routes. 

### Additional notes
1. for the `get /content` routes, the user can view all contents
2. for the `/watchlist` routes, the user will only see their own watchlist
3. for the `upload` routes, a special folder will be created with the user's database id, and the file will be stored in that folder


## Filter, sort, search

You can add filter, sort and search what gets returned in the route: `get /contents`

### filter

| query param        | possible values              |
| ------------------ | ---------------------------- |
| content_type       | Movie, Series                |
| chill_original     | true, false                  |
| premium            | true, false                  |
| duration_more_than | integer in minutes, e.g. 60  |
| duration_less_than | integer in minutes, e.g. 100 |

Sample: `GET /contents?content_type=Movie`


### sort

You can sort the returned content by setting query param sortBy to the following: 

| sortBy                | description                                  |
| --------------------- | -------------------------------------------- |
| duration_minutes_asc  | sort by duration minutes in ascending order  |
| duration_minutes_desc | sort by duration minutes in descending order |
| release_date_asc      | sort by release date in ascending order      |
| release_date_desc     | sort by release date in descending order     |

Sample: `GET /contents?sortBy=duration_minutes_asc`


### search

If you specify 'search' query param, it will return content where the 'search' value is found either in 'title' or 'content_description' of the content

Sample: `GET /contents?search=raid`


### combine queries

You can also combine queries together
`GET /contents?search=raid&sortBy=duration_minutes_desc`


## Sending verification email: nodemailer

There are two options:
1. ethereal (fake email)
2. gmail

### ethereal (fake email)

Please define the following environmental variables in the .env file
```
EMAIL_SERVICE='ethereal'
ETHEREAL_FROM_USER='[email]'
ETHEREAL_PASSWORD='[password]'
```

You can create a randomly-generated user and password here: https://ethereal.email/create

Note: when you `post /register`, in the response there is a 'url' property which you can open to view the email in your browser

### gmail

Please define the following environmental variables in the .env file
```
EMAIL_SERVICE='gmail'
GMAIL_FROM_USER='[email]'
GMAIL_PASSWORD='[password]'
```

You can refer to this tutorial on how to set up your gmail account: https://mailtrap.io/blog/nodemailer-gmail/


## Upload pictures

### Method 1: postman
1. click 'Body' > 'form-data'
2. set key to 'file' of type 'File', set value by browsing to image file
3. send `post` request to `/upload`

### Method 2: upload webpage
1. make sure you are logged in first
2. open `/upload` webpage
3. click 'Choose File'
4. select picture to upload
5. click 'Upload File'
6. file is saved in `/upload/:user_id` folder