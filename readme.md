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

| Endpoint        | Method | Description                       |
| --------------- | ------ | --------------------------------- |
| `/contents`     | GET    | list all Contents                 |
| `/contents/:id` | GET    | list one Content based on id      |
| `/contents/:id` | PATCH  | edit one Content data based on id |
| `/contents/:id` | DELETE | delete one Content based on id    |
| `/contents`     | POST   | create new Content                |
