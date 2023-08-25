import { container } from "tsyringe";
import { UserRepository } from "../../modules/users/infra/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UserRepository
)