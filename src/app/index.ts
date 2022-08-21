import createExpressApp from "./express";
import createConfig from "../config";
import env from "../env";

const config = createConfig({ env });
const app = createExpressApp({ config, env });

function start() {
  app.listen(env.port, signalAppStart);
}

function signalAppStart() {
  console.log(`${env.appName} started`);
  console.table([['Port', env.port], ['Environment', env.env]]);
}

export default {
  app,
  config,
  start,
};