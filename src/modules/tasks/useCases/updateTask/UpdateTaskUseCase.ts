import { prisma } from "../../../../prisma/client";
import { UpdateTaskDTO } from "../../dtos/UpdateTaskDTO";

export class UpdateTaskUseCase {
    async execute({id, title, description, completed}: UpdateTaskDTO) {
        const taskExists = await prisma.task.findUnique({
            where: {id}
        });

        if (!taskExists) {
            throw new Error("Task not found!");
        }

        const updateTask = await prisma.task.update({
            where: { id },
            data: {
                title,
                description,
                completed,
            },
        });

        return updateTask;
    }
}