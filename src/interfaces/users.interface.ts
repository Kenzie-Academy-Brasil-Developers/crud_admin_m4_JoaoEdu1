import { QueryResult } from "pg";
import { z } from "zod";
import { createUsersSchema, userUpdateSchema, usersSchema } from "../schemas";
import { userReadSchema, userReturnSchema } from "../schemas/users.schemas";

type User = z.infer<typeof usersSchema>;

type UserCreate = z.infer<typeof createUsersSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserUpdate = z.infer<typeof userUpdateSchema>;

type UserReturn = z.infer<typeof userReturnSchema>;
type UserResult = QueryResult<User>;

export { User, UserCreate, UserRead, UserUpdate, UserResult, UserReturn };
