import { QueryResult } from "pg";

interface userCourses {
  id: number;
  active: boolean;
  userId: number;
  courseId: number;
}

type userCoursesCreate = Omit<userCourses, "id">;
type userCoursesUpdate = Partial<userCoursesCreate>;
type userCoursesResult = QueryResult<userCourses>;

export { userCourses, userCoursesCreate, userCoursesUpdate, userCoursesResult };
