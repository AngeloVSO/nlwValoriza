import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserServices";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, admin } = req.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, admin });

      return res.json(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
