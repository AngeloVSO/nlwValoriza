import { Request, Response } from "express";
import { userId } from "../middlewares/ensureAuthenticated";
import { ListUserReceiveComlimentsService } from "../services/listUserReceivedServices";

export class ListUserReceiveComlimentsController {
  async handle(req: Request, res: Response) {
    const listUserReceiveComplimentsService =
      new ListUserReceiveComlimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(userId);

    return res.json(compliments);
  }
}
