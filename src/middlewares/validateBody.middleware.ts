import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateBody =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validated = schema.parse(req.body);
    res.locals = { ...res.locals, validated };
    return next();
  };
