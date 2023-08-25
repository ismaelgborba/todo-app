import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import jwt from "jsonwebtoken"

import { IUserRepository } from "../../repositories/IUserRepository";

export interface ICreateAuthentication {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository:  IUserRepository
  ) {}

  async execute({ email, password }: ICreateAuthentication): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    const userId = user?.id;

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const password_match = await compare(password, user.password);

    if (!password_match) {
      throw new Error("Email or password incorrect!");
    }

    const token = jwt.sign({ userId }, 'express', {
      expiresIn: 60 * 60 * 30
    });

    return {
      token: token,
      user: {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email
      }
    };
  }
}

export { AuthenticateUserUseCase };