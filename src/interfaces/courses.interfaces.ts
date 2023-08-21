import { z } from "zod";
import { QueryResult } from "pg";
import { coursesSchema, createCoursesSchema } from "../schemas/courses.schemas";

type Courses = z.infer<typeof coursesSchema>;

type CoursesRequest = z.infer<typeof createCoursesSchema>;
type CoursesResult = QueryResult<Courses>;

export { Courses, CoursesRequest, CoursesResult };
