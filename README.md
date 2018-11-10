# express-typeorm-boilerplate

Express, TypeORM, TypeScript boilerplate

You need to create .env.development with number of PORT and ormconfig.json with list of settings.

For example:

## .env.development

```
PORT=3000
```

## ormconfig.json

```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "typeorm",
  "synchronize": true,
  "logging": false,
  "entities": ["src/entity/**/*.ts"],
  "migrations": ["src/migration/**/*.ts"],
  "subscribers": ["src/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

```

## To start you need to type

```
  npm run dev
```
