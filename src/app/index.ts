import createExpressApp from "./express";
import createConfig from "../config";
import env from "../env";


async function start() {
  const config = await createConfig({ env });
  const app = createExpressApp({ config, env });
  app.listen(env.port, signalAppStart);
}

function signalAppStart() {
  console.log(`${env.appName} started`);
  console.table([['Port', env.port], ['Environment', env.env]]);
}

export default {
  // app,
  // config,
  start,
};