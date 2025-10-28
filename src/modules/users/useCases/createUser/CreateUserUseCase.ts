import { User } from "../../../../../generated/prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute({name, email}: CreateUserDTO): Promise<User>{
        //Verificar se o usuário já existe

        const userAlredyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlredyExists) {
            throw new AppError("User alredy exists!");
        }

        //Criar o usuário
        const user = await prisma.user.create({
            data: {
                name, 
                email
            }
        });

        return user;
    }
}