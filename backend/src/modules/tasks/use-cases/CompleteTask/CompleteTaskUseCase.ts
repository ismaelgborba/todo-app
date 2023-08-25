import { inject, injectable } from "tsyringe";
import { ITaskRepository } from "../../repositories/ITaskRepository";

@injectable()
class CompleteTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITaskRepository
  ) {}

  async execute(id: string): Promise<void> {
    const task = await this.tasksRepository.findById(id);

    if (!task) {
      throw new Error("Task isn't exist.")
    }

    await this.tasksRepository.completed(id);
  }
}

export { CompleteTaskUseCase }