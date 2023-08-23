import { z } from "zod";

const usersSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
});

const createUsersSchema = usersSchema.omit({ id: true });
const userUpdateSchema = createUsersSchema.partial();

const userReturnSchema = usersSchema.omit({ password: true });
const userReadSchema = userReturnSchema.array();

export {
  usersSchema,
  createUsersSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
};
