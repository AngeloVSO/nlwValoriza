import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { userId } from "./ensureAuthenticated";

export const ensureAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const userRepositories = getCustomRepository(UsersRepositories)

    const { admin } = await userRepositories.findOne(userId)

  if (admin) {
    return next();
  }

  return res.status(401).send({ error: "Unauthorized" });
};
