import { Request, Response } from "express";
import { courses, coursesRead } from "../interfaces";
import { coursesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const course: courses = await coursesServices.create(res.locals.validated);

  return res.status(201).json(course);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const Courses: coursesRead = await coursesServices.read();
  return res.status(200).json(Courses);
};

export default { create, read };
