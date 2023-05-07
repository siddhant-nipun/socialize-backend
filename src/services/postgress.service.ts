// import { Pool } from "pg";
import { Pool } from "pg";
import { dbConfig } from "../config/db.config";

const poolPromise = new Pool(dbConfig());

export const dbPool = () => poolPromise;