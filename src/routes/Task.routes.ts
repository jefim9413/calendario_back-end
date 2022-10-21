import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { ListTaskController } from "../modules/tasks/useCases/listTask/ListTaskController";

const routesTask = Router();
const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();

routesTask.post("/", createTaskController.handle);
routesTask.get("/", listTaskController.handle);
export { routesTask };
