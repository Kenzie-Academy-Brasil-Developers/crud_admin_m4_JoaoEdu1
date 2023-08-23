import { checkUserAndCourseExistence } from "./checkUserAndCourseExistence.middlewares";
import { validateBody } from "./validateBody.middleware";
import { handleErrors } from "./handleError.middlewares";
import { EmailExists } from "./EmailExists.middlewares";
import verifyToken from "./verifyToken.niddlewares";
import verifyUserPermission from "./userPermission.middleware";
import { validateAdmin } from "./validateAdmin.middleware";

export {
  handleErrors,
  EmailExists,
  validateBody,
  verifyToken,
  verifyUserPermission,
  checkUserAndCourseExistence,
  validateAdmin,
};
