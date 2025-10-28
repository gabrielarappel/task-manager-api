import { prisma } from "../../../../prisma/client";

export class ListTasksUseCase {
    async execute() {
        const tasks = await prisma.task.findMany({
            include: {user: true}
        });

        return tasks;
    }
}