import { ClientConfig } from "pg";

export const dbConfig = (): ClientConfig => {
  return {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT),
    application_name: process.env.npm_package_name.concat(
      "-",
      process.env.npm_package_version
    ),
  };
};
