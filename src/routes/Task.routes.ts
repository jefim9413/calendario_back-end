import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/DeleteTaskController";
import { ListTaskController } from "../modules/tasks/useCases/listTask/ListTaskController";

const routesTask = Router();
const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const deleteTaskController = new DeleteTaskController();
routesTask.post("/", createTaskController.handle);
routesTask.get("/", listTaskController.handle);
routesTask.delete("/:id", deleteTaskController.handle);
export { routesTask };
