import { Request, Response } from "express";
import { container } from "tsyringe";
import { CompleteTaskUseCase } from "./CompleteTaskUseCase";

class CompleteTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const completeTaskUseCase = container.resolve(CompleteTaskUseCase);

    await completeTaskUseCase.execute(id);

    return response.status(200).send();
  }
}

export { CompleteTaskController };