import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase, ICreateUser } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      first_name,
      last_name,
      email,
      password
    } = request.body as ICreateUser;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      first_name,
      last_name,
      email,
      password
    });

    return response.status(201).send();
  }
}

export { CreateUserController };