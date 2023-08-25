import { Task } from "@prisma/client";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITaskRepository {
  create(data: ICreateTaskDTO): Promise<void>;
  delete(id: string): Promise<void>;
  completed(id: string): Promise<void>;
  findById(id: string): Promise<Task | null>;
}

export { ITaskRepository };