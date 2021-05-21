import { getRepository } from "typeorm";
import User from "../models/User";
import path from 'path';
import uploadConfig from "../config/upload";
import fs from 'fs';
import AppError from '../errors/AppErro';

interface Request{
    user_id: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({user_id, avatarFilename}: Request): Promise<User> {
        const usersrepository =  getRepository(User);
        
        const user = await usersrepository.findOne(user_id);

        if (!user){
            throw new AppError('Somente usuários autenticados podem alterar o avatar.', 401);
        }

        if (user.avatar) {
            // deletar avatar anterior
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }            
        }

        user.avatar = avatarFilename;

        await usersrepository.save(user);

        return user;
    }

}

export default UpdateUserAvatarService;