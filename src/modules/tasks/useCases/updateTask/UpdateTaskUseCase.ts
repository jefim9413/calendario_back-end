import { prisma } from "../../../../database/prismaClient";

interface IUpdateTask {
  id: string;
  title: string;
  description: string;
  date: string;
  duracao: string;
}

class UpdateTaskUseCase {
  async execute({ id, date, description, duracao, title }: IUpdateTask) {
    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error("Task not found");
    }

    const result = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        date,
        duracao,
      },
    });

    return result;
  }
}

export { UpdateTaskUseCase };
