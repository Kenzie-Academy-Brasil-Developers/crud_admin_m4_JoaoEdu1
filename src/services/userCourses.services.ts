import format from "pg-format";
import {
  userCourses,
  userCoursesCreate,
  userCoursesResult,
} from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

const create = async (payload: userCoursesCreate): Promise<void> => {
  const queryFormat: string = format(
    'INSERT INTO "userCourses" (%I) VALUES (%L);',
    Object.keys(payload),
    Object.values(payload)
  );

  await client.query(queryFormat);
};

const destroy = async (userId: string, courseId: string): Promise<void> => {
  const queryString: string = `
  UPDATE "userCourses"
  SET active = false
  WHERE "userId" = $1 AND "courseId" = $2;
  `;

  await client.query(queryString, [userId, courseId]);
};

const read = async (courseId: string): Promise<any[]> => {
  const queryString: string = `
    SELECT 
      u.id "userId",
      u.name "userName",
      c.id "courseId",
      c.name "courseName",
      c.description "courseDescription",
      uc.active "userActiveInCourse"
    FROM "users" u
    JOIN "userCourses" uc
      ON u.id = uc."userId"
    JOIN "courses" c
      ON c.id = uc."courseId"
    WHERE c.id = $1;
  `;

  const queryResult = await client.query(queryString, [courseId]);

  if (!queryResult.rowCount) {
    throw new AppError("No user linked to this course", 404);
  }

  return queryResult.rows;
};

export default { create, destroy, read };
