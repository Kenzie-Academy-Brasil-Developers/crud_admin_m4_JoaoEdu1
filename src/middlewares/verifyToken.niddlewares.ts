import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { JsonWebTokenError, verify } from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);

  const token: string = authorization.split(" ")[1];
  try {
    const decoded = verify(token, process.env.SECRET_KEY!);
    res.locals.decoded = decoded;
    return next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      const appError = new AppError("Invalid token", 401);
      return next(appError);
    }
    return next(error);
  }
};

export default verifyToken;
