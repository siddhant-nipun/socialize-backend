import { dbPool } from "../services/postgress.service";

export const dbFindUser = ({
  email,
  userId,
}: {
  email?: string;
  userId?: string;
}) => {
  const dbClient = dbPool();
  if (!userId && !email) {
    return;
  }
  const attribute = userId ? "id" : "email";
  const sql = `SELECT id FROM users WHERE ${attribute} = $1`;
  const values = [userId ?? email?.trim().toLowerCase()];

  return dbClient?.query(sql, values);
};

export const dbCreateUser = (name: string, email: string, password: string) => {
  const dbClient = dbPool();
  const sql = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id
      `;
  const values = [name, email.trim().toLowerCase(), password];
  return dbClient?.query(sql, values);
};

export const dbVerifyPassword = async (email: string, password: string) => {
  const dbClient = dbPool();
  const sql = `SELECT id FROM users WHERE email = $1 AND password = $2`;
  const values = [email.trim().toLowerCase(), password];
  const result = await dbClient?.query(sql, values);
  return result;
};
