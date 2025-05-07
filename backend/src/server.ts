import { App } from "./app.ts";
import { logger } from "@/logger/index.ts";
import https from "https";
import * as fs from "fs";
import "dotenv/config";

const options = {
  key: fs.readFileSync("./src/ssl/private.key"),
  cert: fs.readFileSync("./src/ssl/certificate.crt"),
};

https.createServer(options, App).listen(process.env.SERVER_HOST, () => {
  logger.server();
});
