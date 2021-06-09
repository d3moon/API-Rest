# NodeJS App

## This App is an API that simulates the insertion of data into a repository, and has a likes and dislikes system!


## To install dependencies:

### `npm install`

## To run the application:

### `yarn eur0nymous`

### You will need [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/) to test routes with methods.

### Will create the following routes:

##### POST -> http://localhost:3333/repositories/


##### GET -> http://localhost:3333/repositories/


##### PUT -> http://localhost:3333/repositories/:id


##### DELETE -> http://localhost:3333/repositories/:id


##### POST -> http://localhost:3333/repositories/:id/like


##### DELETE -> http://localhost:3333/repositories/:id/deslike

###### OBS: To put the id in the other methods, copy it from GET or POST to the object in JSON answered.

The data to be placed in the POST method body are:

`{
"title": "My API",
"url": "google.com",
"techs": ["Node JS", "ReactJS"]
}`
