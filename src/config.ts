import { ENV } from "./env";
import createKnexClient from './knex-client';
import createHome from './app/home';

export default async function createConfig({ env }: { env: ENV }) {
  const db = await createKnexClient({
    connectionString: env.databaseUrl,
  });
  const homeApp = createHome({ db })
  return {
    env,
    db,
    homeApp,
  };
}