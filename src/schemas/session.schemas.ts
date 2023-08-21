import { usersSchema } from "./users.schemas";

const sessionCreate = usersSchema.pick({
  email: true,
  password: true,
});

export { sessionCreate };
