import * as dotenv from "dotenv";
dotenv.config();

export const jwtSecretKey = process.env.JWTSECRET;
