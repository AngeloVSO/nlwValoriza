import { Request, Response } from "express";
import { userId } from "../middlewares/ensureAuthenticated";
import { ListUserSendComlimentsService } from "../services/listUserSendComplimentsServices";

export class ListUserSendComlimentsController {
  async handle(req: Request, res: Response) {
    const listUserSendComplimentsService = new ListUserSendComlimentsService();

    const compliments = await listUserSendComplimentsService.execute(userId);

    return res.json(compliments);
  }
}
