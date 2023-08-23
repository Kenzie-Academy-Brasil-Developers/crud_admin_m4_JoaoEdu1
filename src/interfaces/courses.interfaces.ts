import { z } from "zod";
import { QueryResult } from "pg";
import {
  courseReadSchema,
  coursesSchema,
  createCoursesSchema,
} from "../schemas/courses.schemas";

type courses = z.infer<typeof coursesSchema>;

type coursesCreate = z.infer<typeof createCoursesSchema>;
type coursesResult = QueryResult<courses>;
type coursesRead = z.infer<typeof courseReadSchema>;

export { courses, coursesCreate, coursesResult, coursesRead };
