import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("TasksRepository")
    private tasksRepository: ITaskRepository
  ) {}

  async execute({ name, category, description }: ICreateTaskDTO, user_id: string): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if(!user) {
      throw new Error("User not exists.")
    }

    await this.tasksRepository.create({
      name, 
      description,
      category,
    }, user_id);
  }
}

export { CreateTaskUseCase };