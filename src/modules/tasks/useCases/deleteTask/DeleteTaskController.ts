import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTaskUseCase = new DeleteTaskUseCase();

    const task = await deleteTaskUseCase.execute(id);

    return response.status(200).json(task);
  }
}

export { DeleteTaskController };
