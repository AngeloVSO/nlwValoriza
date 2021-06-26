import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticaterequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticaterequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne({
      email,
    });

    if (!userExists) {
      throw new Error("Invalid credentials");
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    const token = sign(
      {email: userExists.email}, 
      "aa354cf2553712ffaf47dbd4c36fe356", {
      subject: userExists.id,
      expiresIn: "1d",
    });

    return token;
  }
}
