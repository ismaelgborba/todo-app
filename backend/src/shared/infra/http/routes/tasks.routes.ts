import { Router } from "express";
import { CreateTaskController } from "../../../../modules/tasks/use-cases/CreateTask/CreateTaskController";
import { DeleteTaskController } from "../../../../modules/tasks/use-cases/DeleteTask/DeleteTaskController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();

const tasksRoutes = Router();

tasksRoutes.post("/", ensureAuthenticated, createTaskController.handle);
tasksRoutes.delete("/", ensureAuthenticated, deleteTaskController.handle)

export { tasksRoutes };