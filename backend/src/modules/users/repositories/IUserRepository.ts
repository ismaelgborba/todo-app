import { User } from "@prisma/client";
import { ICreateUser } from "../use-cases/CreateUser/CreateUserUseCase";

interface IUserRepository {
  create (data: ICreateUser): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}

export { IUserRepository }