import format from "pg-format";
import { UserCreate, UserRead, UserResult, UserReturn } from "../interfaces";
import { client } from "../database";
import { hash } from "bcryptjs";
import { userReturnSchema } from "../schemas";
import { userReadSchema } from "../schemas/users.schemas";
import { AppError } from "../errors";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  payload.password = await hash(payload.password, 11);

  const queryFormat: string = format(
    'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: UserResult = await client.query(queryFormat);
  return userReturnSchema.parse(query.rows[0]);
};

const read = async (): Promise<UserRead> => {
  const query: UserResult = await client.query('SELECT * FROM "users";');
  return userReadSchema.parse(query.rows);
};

const retrieve = async (userId: string): Promise<any[]> => {
  const queryString: string = `
    SELECT 
      c.id "courseId",
      c.name "courseName",
      c.description "courseDescription",
      uc.active "userActiveInCourse",
      u.id "userId",
      u.name "userName"
    FROM "courses" c
    JOIN "userCourses" uc
      ON c.id = uc."courseId"
    JOIN "users" u
      ON u.id = uc."userId"
    WHERE uc."userId" = $1;
  `;

  const queryResult = await client.query(queryString, [userId]);

  if (!queryResult.rowCount) {
    throw new AppError("No course found", 404);
  }

  return queryResult.rows;
};

export default { create, read, retrieve };
