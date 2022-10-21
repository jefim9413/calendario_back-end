import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, date, duracao } = request.body;
    const updateTaskUseCase = new UpdateTaskUseCase();

    const task = await updateTaskUseCase.execute({
      id,
      title,
      description,
      date,
      duracao,
    });

    return response.json(task);
  }
}

export { UpdateTaskController };
