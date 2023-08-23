import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import { client } from "../database";

export const checkUserAndCourseExistence = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId: string = req.params.userId;
  const courseId: string = req.params.courseId;

  const checkIfUserExists = async (userId: string): Promise<boolean> => {
    const query = 'SELECT EXISTS (SELECT 1 FROM "users" WHERE "id" = $1);';

    const result = await client.query(query, [userId]);

    return result.rows[0].exists;
  };
  const checkIfCourseExists = async (courseId: string): Promise<boolean> => {
    const queryString = 'SELECT id FROM "courses" WHERE id = $1';

    const queryResult = await client.query(queryString, [courseId]);

    return queryResult.rowCount > 0;
  };

  const userExists = await checkIfUserExists(userId);
  const courseExists = await checkIfCourseExists(courseId);

  if (!userExists || !courseExists) {
    throw new AppError("User/course not found", 404);
  }

  next();
};
