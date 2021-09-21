# @geoapp/server

This project was bootstrapped with [Strapi CMS](https://github.com/strapi/strapi).

## Prerequisites

You should have these programs installed on your OS.

- Docker

## Available Scripts

In the project directory, you can run:

### `docker compose -f docker-compose.dev.yml up`

Runs the project in development mode along with PostgreSQL and Geoserver.

### `docker compose up`

Runs the project in production mode along with PostgreSQL, Geoserver and nginx.

1. First create a .env file and clone the schema from .env.example.
2. make sure the <HOST> in DATABASE_URI is refering to the PostgreSQL container service with the name "database".

Open [http://localhost:5000](http://localhost:5000) to view it in the browser then create an Admin account.

1. Change permissions.

```
Settings > USERS & PERMISSIONS PLUGIN  > Roles > Public
Select all permissions under Application & Upload sections.
```
