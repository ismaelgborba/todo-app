import { inject, injectable } from "tsyringe";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITaskRepository
  ) {}

  async execute({ name, category, description }: ICreateTaskDTO): Promise<void> {
    await this.tasksRepository.create({
      name, 
      description,
      category
    });
  }
}

export { CreateTaskUseCase };