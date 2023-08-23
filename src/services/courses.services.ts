import format from "pg-format";
import { client } from "../database";
import {
  courses,
  coursesCreate,
  coursesRead,
  coursesResult,
} from "../interfaces";

const create = async (payload: coursesCreate): Promise<any> => {
  const queryFormat: string = format(
    'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: coursesResult = await client.query(queryFormat);

  return queryResult.rows[0];
};

const read = async (): Promise<coursesRead> => {
  const query: string = 'SELECT * FROM "courses";';
  const queryResult: coursesResult = await client.query(query);

  console.log(queryResult.rows);
  return queryResult.rows;
};

export default { create, read };
