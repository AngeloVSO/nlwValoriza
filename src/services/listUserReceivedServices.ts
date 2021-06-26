import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

export class ListUserReceiveComlimentsService {
  async execute(user_id: string) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: { user_receiver: user_id },
      relations: ["userSender","userReceiver", "tag"]
    });

    if (!compliments) {
      throw new Error("Not exists compliemts");
    }

    return compliments;
  }
}
