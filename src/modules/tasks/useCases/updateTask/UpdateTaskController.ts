import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const updateTaskUseCase = new UpdateTaskUseCase();
        const result = await updateTaskUseCase.execute({
            id,
            title,
            description,
            completed,
        });

        return res.status(200).json(result);
    }
}