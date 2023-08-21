import format from "pg-format";
import {
  User,
  UserCreate,
  UserRead,
  UserResult,
  UserUpdate,
} from "../interfaces";
import { client } from "../database";

const create = async (payload: UserCreate): Promise<User> => {
  const queryFormat: string = format(
    'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: UserResult = await client.query(queryFormat);
  return query.rows[0];
};

const read = async (): Promise<UserRead> => {
  const query: UserResult = await client.query('SELECT * FROM "users";');
  return query.rows;
};

export default { create, read };
