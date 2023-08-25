import { CategoryEnum } from "@prisma/client";

interface ICreateTaskDTO {
  id?: string;
  name: string;
  description: string;
  category: CategoryEnum;
  is_completed?: boolean;
}

export { ICreateTaskDTO };