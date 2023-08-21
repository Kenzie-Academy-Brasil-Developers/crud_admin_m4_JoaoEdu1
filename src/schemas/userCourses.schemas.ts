import { z } from "zod";

const coursesSchema = z.object({
  id: z.number().positive(),
  active: z.boolean().default(true),
  userId: z.number().positive(),
});

const userCoursesCreate = coursesSchema.omit({
  id: true,
  userId: true,
  courseId: true,
});

const coursesReadSchema = coursesSchema.array();

const usersAddCourseSchema = z.object({
  courseId: z.number().positive(),
});

export {
  coursesSchema,
  userCoursesCreate,
  coursesReadSchema,
  usersAddCourseSchema,
};
