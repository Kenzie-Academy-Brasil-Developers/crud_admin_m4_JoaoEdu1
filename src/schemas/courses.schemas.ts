import { z } from "zod";

const coursesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(15),
  description: z.string(),
});

const createCoursesSchema = coursesSchema.omit({ id: true });
const courseReadSchema = coursesSchema.array();

export { coursesSchema, createCoursesSchema, courseReadSchema };
