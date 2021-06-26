import { Request, Response } from "express";
import { userId } from "../middlewares/ensureAuthenticated";
import { CreateComplimentService } from "../services/createComplimentServices";


export class CreateComplimentController {
    async handle(req: Request, res: Response) {
        const { tag_id , user_receiver , message } = req.body

        const createComplimentService = new CreateComplimentService()

        const compliment = await createComplimentService.execute({
            tag_id, user_receiver, user_sender: userId, message
        })

        return res.json(compliment)
    }
}