import { QueryResult } from "pg";
import { z } from "zod";
import { userCoursesCreateSchema, userCoursesSchema } from "../schemas";

type userCourses = z.infer<typeof userCoursesSchema>;
type userCoursesCreate = z.infer<typeof userCoursesCreateSchema>;

type userCoursesResult = QueryResult<userCourses>;

export { userCourses, userCoursesCreate, userCoursesResult };
