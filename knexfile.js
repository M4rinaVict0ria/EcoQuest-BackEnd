import path from 'path';
import 'dotenv/config';

export default {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: path.resolve('db', 'dev.sqlite3')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve('db', 'migrations')
    }
  }
};
