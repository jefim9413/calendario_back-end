import { prisma } from "../../../../database/prismaClient";

class ListTaskUseCase {
  async execute() {
    const tasks = await prisma.task.findMany();

    return tasks;
  }
}

export { ListTaskUseCase };
