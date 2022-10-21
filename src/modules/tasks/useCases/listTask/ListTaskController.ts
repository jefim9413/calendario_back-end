import { Request, Response } from "express";
import { ListTaskUseCase } from "./ListTaskUseCase";

class ListTaskController {
  async handle(request: Request, response: Response) {
    const listTaskUseCase = new ListTaskUseCase();

    const tasks = await listTaskUseCase.execute();

    return response.json(tasks);
  }
}

export { ListTaskController };
