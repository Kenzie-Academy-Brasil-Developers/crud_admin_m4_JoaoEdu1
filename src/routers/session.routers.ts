import { Router } from "express";
import { sessionCreate } from "../schemas";
import { sessionControllers } from "../controllers";
import { validateBody } from "../middlewares";

const sessionRouter: Router = Router();

sessionRouter.post("", validateBody(sessionCreate), sessionControllers.create);

export default sessionRouter;
