import { ENV } from "./env";

export default function createConfig({ env }: { env: ENV }) {
  return {
    env,
  };
}