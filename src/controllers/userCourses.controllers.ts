import { Request, Response } from "express";
import { userCoursesServices } from "../services";
import { userCourses } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  req.body.userId = req.params.userId;
  req.body.courseId = req.params.courseId;
  await userCoursesServices.create(req.body);

  return res
    .status(201)
    .json({ message: "User successfully vinculed to course" });
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userCoursesServices.destroy(req.params.userId, req.params.courseId);
  return res.status(204).json();
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const developerProjects = await userCoursesServices.read(req.params.id);

  return res.status(200).json(developerProjects);
};

export default { create, destroy, read };
