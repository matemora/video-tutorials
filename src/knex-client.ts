import Bluebird from 'bluebird';
import knex from 'knex';

type CreateKnexClientParams = {
  connectionString: string;
  migrationsTableName?: string;
}

export default async function createKnexClient({ connectionString, migrationsTableName }: CreateKnexClientParams) {
  const client = knex({
    client: 'sqlite3',
    connection: {
      filename: connectionString,
    },
    migrations: {
      tableName: migrationsTableName || 'knex_migrations',
    },
  });

  await client.migrate.latest();
  return client;
}