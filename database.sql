
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "plantinfo" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"common_name" VARCHAR (100) NOT NULL,
	"date" VARCHAR,
	"location" VARCHAR (100),
	"stem" VARCHAR (200),
	"leaves" VARCHAR (200)
);

CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"plantinfo_id" INT REFERENCES "plantinfo",
	"url" VARCHAR
);

INSERT INTO "plantinfo"
    ("user_id", "common_name", "date", "location", "stem", "leaves")
VALUES ('1', 'milkweed', '10-10/2019', '3201 22nd ave', 'square', 'turning brown');