import { container } from "tsyringe";
import { TaskRepository } from "../../modules/tasks/infra/repositories/TaskRepository";
import { ITaskRepository } from "../../modules/tasks/repositories/ITaskRepository";
import { UserRepository } from "../../modules/users/infra/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UserRepository
)

container.register<ITaskRepository>(
  "TasksRepository",
  TaskRepository
)