import { Task } from "../../../../../generated/prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";


export class CreateTaskUseCase {
    async execute({title, description, userId}: CreateTaskDTO): Promise<Task>{
        //Verificar se a task já existe

        const taskAlredyExists = await prisma.task.findFirst({
            where: {
                title,
                userId
            }
        });

        if (taskAlredyExists) {
            throw new AppError("Task alredy exists!");
        }

        //Criar o usuário
        const task = await prisma.task.create({
            data: {
                title, 
                description,
                userId
            }
        });

        return task;
    }
}