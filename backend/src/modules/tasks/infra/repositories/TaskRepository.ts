import { Task } from "@prisma/client";
import prisma from "../../../../lib/prisma";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITaskRepository";

class TaskRepository implements ITaskRepository {
  async findAll(user_id: string): Promise<Task[]> {
    const tasks = await prisma.task.findMany({
      where: {
        user_id
      }
    });

    return tasks;
  }

  async create({ name, category, description }: ICreateTaskDTO, user_id: string): Promise<void> {
    await prisma.task.create({
      data: {
        name, 
        category, 
        description,
        user_id
      }
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({
      where: {
        id
      }
    });
  }

  async completed(id: string): Promise<void> {
    await prisma.task.update({
      where: {
        id
      },
      data: {
        is_completed: true
      }
    });
  }

  async findById(id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where: {
        id
      }
    });

    return task;
  }
}

export { TaskRepository };