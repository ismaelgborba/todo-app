import { Task } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@injectable()
class ListAllTasksUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("TasksRepository")
    private tasksRepository: ITaskRepository
  ) {}

  async execute(user_id: string): Promise<Task[]> {
    const user = await this.usersRepository.findById(user_id);

    if(!user) {
      throw new Error("User not exists.")
    }

    const tasks = await this.tasksRepository.findAll(user_id);
    return tasks;
  }
}

export { ListAllTasksUseCase };