import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  async handle(request: Request, response: Response) {
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
    });

    return response.status(201).send();
  }
}

export { CreateTaskController };