
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "entry" (
    "id" SERIAL PRIMARY KEY,
    "sleep" int NOT NULL DEFAULT 0,
    "work" int NOT NULL DEFAULT 0,
    "project" int NOT NULL DEFAULT 0,
    "exercise" int NOT NULL DEFAULT 0,
    "veg_out" int NOT NULL DEFAULT 0,
    "go_out" int NOT NULL DEFAULT 0,
    "friends" int NOT NULL DEFAULT 0,
    "family" int NOT NULL DEFAULT 0,
    "partner" int NOT NULL DEFAULT 0,
    "rating" int NOT NULL DEFAULT 1,
    "date" date NOT NULL DEFAULT now(),
    "user_id" int REFERENCES "user" (id) ON DELETE CASCADE
);