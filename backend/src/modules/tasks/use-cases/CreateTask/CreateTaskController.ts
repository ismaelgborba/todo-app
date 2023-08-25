import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { id: user_id } = request.user;

    const {
      name,
      description,
      category
    } = request.body as ICreateTaskDTO;

    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    await createTaskUseCase.execute({
      name,
      description,
      category
    }, user_id);

    return response.status(201).send();
  }
}

export { CreateTaskController };