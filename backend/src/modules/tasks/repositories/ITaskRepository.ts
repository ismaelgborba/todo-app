import { Task } from "@prisma/client";
import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITaskRepository {
  create(data: ICreateTaskDTO, user_id: string): Promise<void>;
  delete(id: string): Promise<void>;
  completed(id: string): Promise<void>;
  findById(id: string): Promise<Task | null>;
  findAll(user_id: string): Promise<Task[]>;
}

export { ITaskRepository };