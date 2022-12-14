import { prisma } from "../../../../database/prismaClient";
interface ICreateTesk {
  title: string;
  description: string;
  date: Date;
  duracao: number;
}

class CreateTaskUseCase {
  async execute({ title, description, date, duracao }: ICreateTesk) {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        duracao,
      },
    });

    return task;
  }
}

export { CreateTaskUseCase };
