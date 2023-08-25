import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase, ICreateAuthentication } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const {
      email,
      password
    } = request.body as ICreateAuthentication;

    const createAuthenticationUseCase = container.resolve(AuthenticateUserUseCase);

    const user_authenticated = await createAuthenticationUseCase.execute({
      email,
      password
    });

    return response.status(200).json(user_authenticated);
  }
}

export { AuthenticateUserController };