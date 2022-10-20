import { Router } from "express";
import { routesTask } from "./Task.routes";

const router = Router();

router.use("/task", routesTask);

export { router };
