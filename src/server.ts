import * as http from "http";
import { app } from "./app";
import * as dotenv from "dotenv";

dotenv.config();
const server = http.createServer(app);
const PORT = 8084;

const startServer = async (server, PORT) => {
  server.listen(PORT, () => {
    console.info(`Listening on port ${PORT}...`);
  });
};

startServer(server, PORT);
