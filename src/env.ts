import packageJson from '../package.json';
import dotenv from 'dotenv';

dotenv.config();

function requireFromEnv(key: string) {
  if (!process.env[key]) {
    // eslint-disable-next-line no-console
    console.error(`[APP ERROR] Missing env variable: ${key}`);

    return process.exit(1);
  }

  return process.env[key];
}

const env = {
  appName: requireFromEnv('APP_NAME'),
  env: requireFromEnv('NODE_ENV'),
  port: parseInt(requireFromEnv('PORT') ?? '5000', 10),
  version: packageJson.version,
  databaseUrl: requireFromEnv('DATABASE_URL') ?? '',
};

export type ENV = typeof env;
export default env;