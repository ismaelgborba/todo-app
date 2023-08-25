import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllTasksUseCase } from "./ListAllTasksUseCase";

class ListAllTasksController {
  async handle (request: Request, response: Response) {
    const { id: user_id } = request.user;

    const listAllTasksUseCase = container.resolve(ListAllTasksUseCase)

    const tasks = listAllTasksUseCase.execute(user_id);

    return response.status(200).json(tasks);
  }
}

export { ListAllTasksController }