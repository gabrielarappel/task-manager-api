import { prisma } from "../../../../prisma/client";

export class DeleteTaskUseCase {
    async execute(id: string) {
        const taskExists = await prisma.task.findUnique({
            where: { id }
        });

        if (!taskExists) {
            throw new Error("Task not found");
        }

        await prisma.task.delete({
            where: { id }
        });

        return { message: "Task deleted successfully" };
    }
}