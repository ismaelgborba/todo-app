import { User } from "@prisma/client";
import prisma from "../../../../lib/prisma";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUser } from "../../use-cases/CreateUser/CreateUserUseCase";

class UserRepository implements IUserRepository {
  async create({ first_name, last_name, email, password }: ICreateUser): Promise<void> {
    await prisma.user.create({
      data: {
        first_name, 
        last_name, 
        email,
        password
      }
    })
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    return user;
  }
}

export { UserRepository };