import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { title, description, date, duracao } = request.body;
    const createTaskUseCase = new CreateTaskUseCase();

    const result = await createTaskUseCase.execute({
      title,
      description,
      date,
      duracao,
    });

    return response.json(result);
  }
}

export { CreateTaskController };
