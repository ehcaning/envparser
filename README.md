# Env Parser

A simple module for parse env variables into required type.

Example:

```js
const env = require('@ehcan/envparser');

config = {
	db: {
		host: env.str('DB_HOST', 'localhost'),
		port: env.num('DB_PORT', 5432),
		username: env.str('DB_USER', 'user_1'),
		password: env.str('DB_PASS', 'passwd'),
		queryLog: env.bool('DB_QUERY_LOG', true),
		options: env.array('DB_OPTIONS', ['option_1', 'option_2']),
	},
};

console.log(config);
```
Without `env` file:
```json
console.log(config);

{
  "db": {
    "host": "localhost",
    "port": 5432,
    "username": "user_1",
    "password": "passwd",
    "queryLog": true,
    "options": [
      "option_1",
      "option_2"
    ]
  }
}
```

With `env` file:
```env
DB_HOST=pg
DB_PORT=5400
DB_USER=my_user
DB_PASS=my_pass
DB_QUERY_LOG=false
DB_OPTIONS=option_3,option_4
```

```json
console.log(config);

{
  "db": {
    "host": "pg",
    "port": 5400,
    "username": "my_user",
    "password": "my_pass",
    "queryLog": false,
    "options": [
      "option_3",
      "option_4"
    ]
  }
}
```
