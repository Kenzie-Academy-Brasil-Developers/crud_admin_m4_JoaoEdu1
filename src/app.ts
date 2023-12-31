import "express-async-errors";
import express, { Application, json } from "express";
import { coursesRouter, sessionRouter, usersRouter } from "./routers";
import { handleErrors } from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/login", sessionRouter);

app.use(handleErrors);

export default app;
