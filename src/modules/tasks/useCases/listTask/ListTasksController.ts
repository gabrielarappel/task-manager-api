import { Request, Response } from "express";
import { ListTasksUseCase } from "./ListTasksUseCase";

export class ListTasksController {
    async handle(req: Request, res: Response) {
        const listTasksUseCase = new ListTasksUseCase();
        const result = await listTasksUseCase.execute();

        return res.status(200).json(result);
    }
}