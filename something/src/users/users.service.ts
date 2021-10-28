import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from './dto/user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

async getUsers():Promise<User[]>{
    return await this.model.find();
}

async getUserById(id: string):Promise<User>{
    return await this.model.findById(id);
}

async updateUserById(id: string, userDto: UserDTO):Promise<User>{
    return await this.model.findByIdAndUpdate(id, userDto);
}

async deleteUserById(id: string):Promise<User>{
    return await this.model.findByIdAndDelete(id);
}

async create(userDto: UserDTO):Promise<User>{
    return await new this.model({
        ...userDto
    }).save()
}

}
