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
```

4. run `npx sequelize db:create` (if database does not exist yet)
5. run `npx sequelize db:migrate`
6. run `npx sequelize db:seed:all`
7. run `npm run dev` to run server locally


## API documentation


### Content

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /contents     | GET    | list all Contents                 |
| /contents/:id | GET    | list one Content based on id      |
| /contents/:id | PATCH  | edit one Content data based on id |
| /contents/:id | DELETE | delete one Content based on id    |
| /contents     | POST   | create new Content                |

#### Fields

| Name                    | Data Type                               | Description |
| ----------------------- | --------------------------------------- | ----------- |
| `parental_rating_id`    | integer (foreign key to ParentalRating) | required    |
| `title`                 | varchar(255)                            | required    |
| `content_description`   | text                                    | required    |
| `description_image_url` | text                                    | -           |
| `thumbnail_image_url`   | text                                    | -           |
| `content_type`          | enum: "Movie", "Series"                 | required    |
| `chill_original`        | boolean                                 | required    |
| `premium`               | boolean                                 | required    |
| `duration_minutes`      | integer                                 | -           |
| `release_date`          | date only                               | required    |

### UserAccount

#### Endpoints

| Endpoint          | Method | Description                           |
| ----------------- | ------ | ------------------------------------- |
| /useraccounts     | GET    | list all UserAccounts                 |
| /useraccounts/:id | GET    | list one UserAccount based on id      |
| /useraccounts/:id | PATCH  | edit one UserAccount data based on id |
| /useraccounts/:id | DELETE | delete one UserAccount based on id    |
| /useraccounts     | POST   | create new UserAccount                |


#### Fields

| Name               | Data Type    | Description                                         |
| ------------------ | ------------ | --------------------------------------------------- |
| `username`         | varchar(255) | required, unique                                    |
| `email`            | varchar(255) | required, unique                                    |
| `date_of_birth`    | date only    | required                                            |
| `avatar_image_url` | text         | -                                                   |
| `password_hash`    | varchar(255) | when saving to database, will store hashed password |

### Actor

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /actors     | GET    | list all Actors                 |
| /actors/:id | GET    | list one Actor based on id      |
| /actors/:id | PATCH  | edit one Actor data based on id |
| /actors/:id | DELETE | delete one Actor based on id    |
| /actors     | POST   | create new Actor                |

#### Fields

| Name         | Data Type    | Description |
| ------------ | ------------ | ----------- |
| `actor_name` | varchar(255) | required    |


### Director

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /directors     | GET    | list all Directors                 |
| /directors/:id | GET    | list one Director based on id      |
| /directors/:id | PATCH  | edit one Director data based on id |
| /directors/:id | DELETE | delete one Director based on id    |
| /directors     | POST   | create new Director                |

#### Fields

| Name            | Data Type    | Description |
| --------------- | ------------ | ----------- |
| `director_name` | varchar(255) | required    |

### Episode

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /episodes     | GET    | list all Episodes                 |
| /episodes/:id | GET    | list one Episode based on id      |
| /episodes/:id | PATCH  | edit one Episode data based on id |
| /episodes/:id | DELETE | delete one Episode based on id    |
| /episodes     | POST   | create new Episode                |

#### Fields

| Name                  | Data Type                       | Description |
| --------------------- | ------------------------------- | ----------- |
| `season_id`           | integer (foreign key to Season) | required    |
| `episode_number`      | integer                         | required    |
| `title`               | varchar(255)                    | required    |
| `release_date`        | date only                       | required    |
| `episode_description` | text                            |             |
| `duration_minutes`    | integer                         |             |

### Genre

#### Endpoints

| Endpoint    | Method | Description                     |
| ----------- | ------ | ------------------------------- |
| /genres     | GET    | list all Genres                 |
| /genres/:id | GET    | list one Genre based on id      |
| /genres/:id | PATCH  | edit one Genre data based on id |
| /genres/:id | DELETE | delete one Genre based on id    |
| /genres     | POST   | create new Genre                |

#### Fields

| Name         | Data Type    | Description |
| ------------ | ------------ | ----------- |
| `genre_name` | varchar(255) | required    |

### ParentalRating

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /parentalratings     | GET    | list all ParentalRatings                 |
| /parentalratings/:id | GET    | list one ParentalRating based on id      |
| /parentalratings/:id | PATCH  | edit one ParentalRating data based on id |
| /parentalratings/:id | DELETE | delete one ParentalRating based on id    |
| /parentalratings     | POST   | create new ParentalRating                |

#### Fields

| Name          | Data Type    | Description |
| ------------- | ------------ | ----------- |
| `rating_name` | varchar(255) | required    |

### Payment

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /payments     | GET    | list all Payments                 |
| /payments/:id | GET    | list one Payment based on id      |
| /payments/:id | PATCH  | edit one Payment data based on id |
| /payments/:id | DELETE | delete one Payment based on id    |
| /payments     | POST   | create new Payment                |

#### Fields

| Name                | Data Type                                                     | Description        |
| ------------------- | ------------------------------------------------------------- | ------------------ |
| `user_account_id`   | integer (foreign key to UserAccount)                          | required           |
| `payment_method_id` | integer (foreign key to PaymentMethod)                        | required           |
| `amount`            | decimal (10, 2)                                               | required           |
| `payment_date`      | date only                                                     | required           |
| `payment_code`      | varchar(255)                                                  | required           |
| `transaction_id`    | varchar(255)                                                  | required           |
| `payment_status`    | enum: "Pending", "Success", "Failed", "Refunded", "Cancelled" | default: "Pending" |

### PaymentMethod

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /paymentmethods     | GET    | list all PaymentMethods                 |
| /paymentmethods/:id | GET    | list one PaymentMethod based on id      |
| /paymentmethods/:id | PATCH  | edit one PaymentMethod data based on id |
| /paymentmethods/:id | DELETE | delete one PaymentMethod based on id    |
| /paymentmethods     | POST   | create new PaymentMethod                |

#### Fields

| Name                         | Data Type    | Description |
| ---------------------------- | ------------ | ----------- |
| `payment_method_name`        | varchar(255) | required    |
| `payment_method_description` | varchar(255) | required    |

### Rating

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /ratings     | GET    | list all Ratings                 |
| /ratings/:id | GET    | list one Rating based on id      |
| /ratings/:id | PATCH  | edit one Rating data based on id |
| /ratings/:id | DELETE | delete one Rating based on id    |
| /ratings     | POST   | create new Rating                |

#### Fields

| Name           | Data Type                        | Description      |
| -------------- | -------------------------------- | ---------------- |
| `content_id`   | integer (foreign key to Content) | required         |
| `rating_value` | integer                          | required, 1 to 5 |

### Season

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /seasons     | GET    | list all Seasons                 |
| /seasons/:id | GET    | list one Season based on id      |
| /seasons/:id | PATCH  | edit one Season data based on id |
| /seasons/:id | DELETE | delete one Season based on id    |
| /seasons     | POST   | create new Season                |

#### Fields

| Name                 | Data Type                        | Description |
| -------------------- | -------------------------------- | ----------- |
| `content_id`         | integer (foreign key to Content) | required    |
| `season_number`      | integer                          | required    |
| `release_date`       | date only                        | required    |
| `season_description` | text                             | -           |

### Subscription

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /subscriptions     | GET    | list all Subscriptions                 |
| /subscriptions/:id | GET    | list one Subscription based on id      |
| /subscriptions/:id | PATCH  | edit one Subscription data based on id |
| /subscriptions/:id | DELETE | delete one Subscription based on id    |
| /subscriptions     | POST   | create new Subscription                |

#### Fields

| Name                 | Data Type       | Description |
| -------------------- | --------------- | ----------- |
| `plan_name`          | varchar(255)    | required    |
| `price_month`        | decimal (10, 2) | required    |
| `number_of_accounts` | integer         | required    |


### SubscriptionFeature

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /subscriptionfeatures     | GET    | list all SubscriptionFeatures                 |
| /subscriptionfeatures/:id | GET    | list one SubscriptionFeature based on id      |
| /subscriptionfeatures/:id | PATCH  | edit one SubscriptionFeature data based on id |
| /subscriptionfeatures/:id | DELETE | delete one SubscriptionFeature based on id    |
| /subscriptionfeatures     | POST   | create new SubscriptionFeature                |

#### Fields

| Name                  | Data Type                             | Description |
| --------------------- | ------------------------------------- | ----------- |
| `subscription_id`     | integer (foreign key to Subscription) | required    |
| `feature_description` | varchar(255)                          | required    |

### ContentActor 

#### Endpoints

| Endpoint                                    | Method | Description                                                 |
| ------------------------------------------- | ------ | ----------------------------------------------------------- |
| /contentactor                               | GET    | list all ContentActors                                      |
| /contentactor?content_id:=:id               | GET    | list all ContentActors of content_id :id                    |
| /contentactor?actor_id:=:id                 | GET    | list all ContentActors of actor_id :id                      |
| /contentactor?content_id=:id1&actor_id=:id2 | GET    | list all ContentActors of content_id :id1 and actor_id :id2 |
| /contentactor/:id                           | GET    | list one ContentActor based on id                           |
| /contentactor/:id                           | PATCH  | edit one ContentActor data based on id                      |
| /contentactor/:id                           | DELETE | delete one ContentActor based on id                         |
| /contentactor                               | POST   | create new ContentActor                                     |

#### Fields

| Name         | Data Type                        | Description |
| ------------ | -------------------------------- | ----------- |
| `content_id` | integer (foreign key to Content) | required    |
| `actor_id`   | integer (foreign key to Actor)   | required    |

### ContentDirector 

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /contentdirector     | GET    | list all ContentDirectors                 |
| /contentdirector/:id | GET    | list one ContentDirector based on id      |
| /contentdirector/:id | PATCH  | edit one ContentDirector data based on id |
| /contentdirector/:id | DELETE | delete one ContentDirector based on id    |
| /contentdirector     | POST   | create new ContentDirector                |

#### Fields

| Name          | Data Type                         | Description |
| ------------- | --------------------------------- | ----------- |
| `content_id`  | integer (foreign key to Content)  | required    |
| `director_id` | integer (foreign key to Director) | required    |

### ContentGenre 

#### Endpoints

| Endpoint          | Method | Description                            |
| ----------------- | ------ | -------------------------------------- |
| /contentgenre     | GET    | list all ContentGenres                 |
| /contentgenre/:id | GET    | list one ContentGenre based on id      |
| /contentgenre/:id | PATCH  | edit one ContentGenre data based on id |
| /contentgenre/:id | DELETE | delete one ContentGenre based on id    |
| /contentgenre     | POST   | create new ContentGenre                |

#### Fields

| Name         | Data Type                        | Description |
| ------------ | -------------------------------- | ----------- |
| `content_id` | integer (foreign key to Content) | required    |
| `genre_id`   | integer (foreign key to Genre)   | required    |

### UserAccountSubscription

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /useraccountsubscription     | GET    | list all UserAccountSubscriptions                 |
| /useraccountsubscription/:id | GET    | list one UserAccountSubscription based on id      |
| /useraccountsubscription/:id | PATCH  | edit one UserAccountSubscription data based on id |
| /useraccountsubscription/:id | DELETE | delete one UserAccountSubscription based on id    |
| /useraccountsubscription     | POST   | create new UserAccountSubscription                |

#### Fields

| Name              | Data Type                             | Description |
| ----------------- | ------------------------------------- | ----------- |
| `user_account_id` | integer (foreign key to UserAccount)  | required    |
| `subscription_id` | integer (foreign key to Subscription) | required    |
| `start_date`      | date                                  | required    |
| `end_date`        | date                                  | required    |

### WatchHistory

#### Endpoints

| Endpoint            | Method | Description                            |
| ------------------- | ------ | -------------------------------------- |
| /watchhistories     | GET    | list all WatchHistories                |
| /watchhistories/:id | GET    | list one WatchHistory based on id      |
| /watchhistories/:id | PATCH  | edit one WatchHistory data based on id |
| /watchhistories/:id | DELETE | delete one WatchHistory based on id    |
| /watchhistories     | POST   | create new WatchHistory                |

#### Fields

| Name              | Data Type                            | Description      |
| ----------------- | ------------------------------------ | ---------------- |
| `content_id`      | integer (foreign key to Content)     | required         |
| `user_account_id` | integer (foreign key to UserAccount) | required         |
| `progress`        | decimal (3, 2)                       | required, 0 to 1 |

### WatchList

#### Endpoints

| Endpoint      | Method | Description                       |
| ------------- | ------ | --------------------------------- |
| /watchlists     | GET    | list all WatchLists                 |
| /watchlists/:id | GET    | list one WatchList based on id      |
| /watchlists/:id | PATCH  | edit one WatchList data based on id |
| /watchlists/:id | DELETE | delete one WatchList based on id    |
| /watchlists     | POST   | create new WatchList                |

#### Fields

| Name              | Data Type                            | Description |
| ----------------- | ------------------------------------ | ----------- |
| `content_id`      | integer (foreign key to Content)     | required    |
| `user_account_id` | integer (foreign key to UserAccount) | required    |
| `date_added`      | date                                 | required    |


