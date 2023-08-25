import { Router } from "express";

import { CompleteTaskController } from "../../../../modules/tasks/use-cases/CompleteTask/CompleteTaskController";
import { CreateTaskController } from "../../../../modules/tasks/use-cases/CreateTask/CreateTaskController";
import { DeleteTaskController } from "../../../../modules/tasks/use-cases/DeleteTask/DeleteTaskController";
import { ListAllTasksController } from "../../../../modules/tasks/use-cases/ListAllTasks/ListAllTasksController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const listAllTasksController = new ListAllTasksController();
const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();
const completeTaskController = new CompleteTaskController();

const tasksRoutes = Router();

tasksRoutes.get("/", ensureAuthenticated, listAllTasksController.handle);
tasksRoutes.post("/", ensureAuthenticated, createTaskController.handle);
tasksRoutes.delete("/:id", ensureAuthenticated, deleteTaskController.handle);
tasksRoutes.put("/:id", ensureAuthenticated, completeTaskController.handle);

export { tasksRoutes };