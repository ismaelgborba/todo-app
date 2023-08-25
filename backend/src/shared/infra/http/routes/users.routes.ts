import { Router } from 'express';
import { AuthenticateUserController } from '../../../../modules/users/use-cases/AuthenticateUser/AuthenticateUserController';
import { CreateUserController } from '../../../../modules/users/use-cases/CreateUser/CreateUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const usersRoutes = Router();

usersRoutes.post("/session", authenticateUserController.handle)
usersRoutes.post("/", createUserController.handle);

export { usersRoutes };