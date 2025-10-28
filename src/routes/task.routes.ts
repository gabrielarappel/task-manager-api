import { Router } from "express";
import { CreateTaskController } from "../modules/tasks/useCases/createTask/CreateTaskController";
import { ListTasksController } from "../modules/tasks/useCases/listTask/ListTasksController";
import { UpdateTaskController } from "../modules/tasks/useCases/updateTask/UpdateTaskController";
import { DeleteTaskController } from "../modules/tasks/useCases/deleteTask/DeleteTaskController";

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

const taskRoutes = Router();

taskRoutes.post("/", createTaskController.handle);
taskRoutes.get("/", listTasksController.handle);
taskRoutes.put("/:id", updateTaskController.handle);
taskRoutes.delete("/:id", deleteTaskController.handle);


export { taskRoutes };