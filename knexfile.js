import path from 'path';
import 'dotenv/config';

export default {
  development: {
    client: 'sqlite3', // driver do SQLite
    connection: {
      filename: path.resolve('db', 'dev.sqlite3') // caminho absoluto para o arquivo do banco
    },
    useNullAsDefault: true, // necessário para SQLite (evita warnings do Knex)
    migrations: {
      directory: path.resolve('db', 'migrations') // onde ficam os arquivos de migração
    }
  }
};
