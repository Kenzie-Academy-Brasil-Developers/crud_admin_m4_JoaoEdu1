import { Router } from "express";
import {
  checkUserAndCourseExistence,
  validateAdmin,
  validateBody,
  verifyToken,
  verifyUserPermission,
} from "../middlewares";
import { coursesControllers, userCoursesControllers } from "../controllers";
import { createCoursesSchema } from "../schemas";

const coursesRouter: Router = Router();

coursesRouter.post(
  "",
  validateBody(createCoursesSchema),
  verifyToken,
  verifyUserPermission,
  coursesControllers.create
);
coursesRouter.get("", coursesControllers.read);

coursesRouter.post(
  "/:courseId/users/:userId",
  verifyToken,
  verifyUserPermission,
  checkUserAndCourseExistence,
  userCoursesControllers.create
);
coursesRouter.delete(
  "/:courseId/users/:userId",

  verifyToken,
  verifyUserPermission,
  checkUserAndCourseExistence,
  userCoursesControllers.destroy
);
coursesRouter.get(
  "/:id/users",
  verifyToken,
  verifyUserPermission,
  validateAdmin,
  userCoursesControllers.read
);

export default coursesRouter;
