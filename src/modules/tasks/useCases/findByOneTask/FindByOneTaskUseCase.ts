import { prisma } from "../../../../database/prismaClient";

class FindByOneTaskUseCase {
  async execute(id: string) {
    const result = await prisma.task.findUnique({
      where: {
        id,
      },
    });
    if (!result) {
      throw new Error("There is no task with that id");
    }

    return result;
  }
}

export { FindByOneTaskUseCase };
