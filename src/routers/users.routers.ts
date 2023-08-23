import { Router } from "express";
import { usersControllers } from "../controllers";
import {
  EmailExists,
  validateBody,
  verifyToken,
  verifyUserPermission,
} from "../middlewares";
import { createUsersSchema } from "../schemas";

const usersRouter: Router = Router();

usersRouter.post(
  "",
  validateBody(createUsersSchema),
  EmailExists,
  usersControllers.create
);
usersRouter.get("", verifyToken, verifyUserPermission, usersControllers.read);

usersRouter.get(
  "/:id/courses",
  verifyToken,
  verifyUserPermission,
  usersControllers.retrieve
);

export default usersRouter;
