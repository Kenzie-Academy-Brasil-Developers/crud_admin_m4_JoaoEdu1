import { Request, Response } from "express";
import { User, UserRead } from "../interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await userServices.read();
  return res.status(200).json(users);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundUser;
  return res.status(200).json(user);
};

export default { create, read, retrieve };
