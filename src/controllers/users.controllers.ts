import { Request, Response } from "express";
import { User, UserRead, UserReturn } from "../interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await userServices.read();
  return res.status(200).json(users);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.params.id);

  const courses = await userServices.retrieve(req.params.id);
  return res.status(200).json(courses);
};

export default { create, read, retrieve };
