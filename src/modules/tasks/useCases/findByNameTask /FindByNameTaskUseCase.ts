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

    return result;
  }
}

export { FindByNameTaskUseCase };
