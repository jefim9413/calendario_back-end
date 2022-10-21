import { prisma } from "../../../../database/prismaClient";

class FindByNameTaskUseCase {
  async execute(title: string) {
    const result = await prisma.task.findMany({
      where: {
        title: {
          equals: title,
          mode: "insensitive",
        },
      },
    });
    if (!result) {
      throw new Error("There is no task with that title");
    }

    return result;
  }
}

export { FindByNameTaskUseCase };
