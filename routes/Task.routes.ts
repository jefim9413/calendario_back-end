import { Router } from "express";
import { CreateTaskController } from "../src/modules/tasks/useCases/createTask/CreateTaskController";

const routesTask = Router();
const createTaskController = new CreateTaskController();

routesTask.post("/", createTaskController.handle);

export { routesTask };
