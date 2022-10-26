import { Request, Response } from "express";
import { FindByOneTaskUseCase } from "./FindByOneTaskUseCase";

class FindByOneTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findByOneTaskUseCase = new FindByOneTaskUseCase();

    const result = await findByOneTaskUseCase.execute(id);

    return response.json(result);
  }
}

export { FindByOneTaskController };
