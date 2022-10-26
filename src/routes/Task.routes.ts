import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/DeleteTaskController";
import { FindByNameTaskController } from "../modules/tasks/useCases/findByNameTask /FindByNameTaskController";
import { FindByOneTaskController } from "../modules/tasks/useCases/findByOneTask/FindByOneController";
import { ListTaskController } from "../modules/tasks/useCases/listTask/ListTaskController";
import { UpdateTaskController } from "../modules/tasks/useCases/updateTask/UpdateTaskController";

const routesTask = Router();
const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();
const findByNameTaskController = new FindByNameTaskController();
const findByOneTaskController = new FindByOneTaskController();

routesTask.post("/", createTaskController.handle);
routesTask.get("/", listTaskController.handle);
routesTask.get("/:id", findByOneTaskController.handle);
routesTask.delete("/:id", deleteTaskController.handle);
routesTask.put("/:id", updateTaskController.handle);
routesTask.get("/titulo", findByNameTaskController.handle);

export { routesTask };
