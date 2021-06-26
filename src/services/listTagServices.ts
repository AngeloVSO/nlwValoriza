import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class ListTagService {
  async execute() {
    const tagRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagRepositories.find();

    return classToPlain(tags);
  }
}
