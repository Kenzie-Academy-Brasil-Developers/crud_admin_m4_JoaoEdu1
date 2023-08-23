import { z } from "zod";

const userCoursesSchema = z.object({
  id: z.number().positive(),
  active: z.boolean().default(true),
  userId: z.number().positive(),
  courseId: z.number().positive(),
});

const userCoursesCreateSchema = userCoursesSchema.omit({
  id: true,
  userId: true,
  courseId: true,
});

export { userCoursesSchema, userCoursesCreateSchema };
