import { Request, Response } from "express";
import { FindByNameTaskUseCase } from "./FindByNameTaskUseCase";

class FindByNameTaskController {
  async handle(request: Request, response: Response) {
    const { title } = request.body;

    const findByNameTaskUseCase = new FindByNameTaskUseCase();

    const result = await findByNameTaskUseCase.execute(title);

    return response.json(result);
  }
}

export { FindByNameTaskController };
