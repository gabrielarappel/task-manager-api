import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";


export class CreateTaskController {
    async handle(req: Request, res: Response) {
        const taskData: CreateTaskDTO = req.body;

        const createTaskUseCase = new CreateTaskUseCase();

        const result = await createTaskUseCase.execute(taskData);

        return res.status(201).json(result)

    }
}