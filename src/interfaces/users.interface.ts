import { QueryResult } from "pg";
import { z } from "zod";
import { createUsersSchema, userUpdateSchema, usersSchema } from "../schemas";

type User = z.infer<typeof usersSchema>;

type UserCreate = z.infer<typeof createUsersSchema>;
type UserRead = Array<User>;
type UserUpdate = z.infer<typeof userUpdateSchema>;

type UserResult = QueryResult<User>;

export { User, UserCreate, UserRead, UserUpdate, UserResult };
