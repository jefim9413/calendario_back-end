import { prisma } from "../../../../database/prismaClient";
interface ICreateTesk {
  title: string;
  description: string;
  date: string;
  duracao: string;
}

class CreateTaskUseCase {
  async execute({ title, description, date, duracao }: ICreateTesk) {
    const task = await prisma.tarefa.create({
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
