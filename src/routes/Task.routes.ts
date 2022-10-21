import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/DeleteTaskController";
import { ListTaskController } from "../modules/tasks/useCases/listTask/ListTaskController";
import { UpdateTaskController } from "../modules/tasks/useCases/updateTask/UpdateTaskController";

const routesTask = Router();
const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();

routesTask.post("/", createTaskController.handle);
routesTask.get("/", listTaskController.handle);
routesTask.delete("/:id", deleteTaskController.handle);
routesTask.put("/:id", updateTaskController.handle);
export { routesTask };
