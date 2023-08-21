import { Router } from "express";
import { verifyToken, verifyUserPermission } from "../middlewares";

const coursesRouter: Router = Router();

coursesRouter.post("", verifyToken, verifyUserPermission);
coursesRouter.get("");

coursesRouter.post("/:courseId/users/:userId");
coursesRouter.delete("/:courseId/users/:userId");
coursesRouter.get("/:id/users");

export default coursesRouter;
