# Morel of the Story

Welcome to Morel of the Story - a mobile first web application that allows users to create a personal journal of plants they find while foraging. Users are reminded to include detailed information about the plant they have photographed, which is then added to their collection. 

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

Morel of the Story (V.1) will be deployed by the end of December 2019.

In the meantime, if you would like to check out this project, the following instructions will guide you in setting it up.

It is **STRONGLY** recommended to follow these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `foraging` and create the following three tables: 

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (250) NOT NULL,
    "photo_id" INTEGER,
    "experience" VARCHAR (300)
);

CREATE TABLE "plantinfo" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"common_name" VARCHAR (100) NOT NULL,
	"scientific_name" VARCHAR (100),
	"date" VARCHAR,
	"location" VARCHAR (100),
	"stem" VARCHAR (200),
	"leaves" VARCHAR (200),
	"added_image" TEXT	
);

CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"plantinfo_id" INT REFERENCES "plantinfo",
	"url" VARCHAR
);
```

## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App


## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy

## Next Steps

Upcoming versions will offer the individual user the option to upload multiple photos of the same plant, as well as allow users to interact, and offer input about each other’s finds. Maintaining the social component among foraging culture is important, and is much of the inspiration behind this application.


## Author(s)

Jessica Woudsma


## Acknowledgements

Cassidy Foust - Morel of the Story logo
Prime Digital Academy
Porta Cohort


unchecked # [checkbox:unchecked] sample text

# [checkbox:unchecked] sample text

[ ] unchecked # [checkbox:unchecked] sample text

* [ ] unchecked # [checkbox:unchecked] sample text

* [ ] #

- [ ]
- [x]

* [ ] 
* [x]


[ ] sample text
[x] sample text
