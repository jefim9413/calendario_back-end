import { prisma } from "../../../../database/prismaClient";

class DeleteTaskUseCase {
  async execute(id: string) {
    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error("Task not found");
    }
    await prisma.task.delete({ where: { id } });

    return task;
  }
}

export { DeleteTaskUseCase };
