import { Router } from "express";
import { CreateTaskController } from "../../../../modules/tasks/use-cases/CreateTask/CreateTaskController";

const createTaskController = new CreateTaskController();

const tasksRoutes = Router();

tasksRoutes.post("/", createTaskController.handle);

export { tasksRoutes };