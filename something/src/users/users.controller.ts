import { Controller, Body, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {
constructor(private readonly userService: UsersService) {}

@Post("/create")
async create(@Body() userDto: UserDTO){
    return await this.userService.create(userDto);
}

@Get()
async getUsers(){
    return await this.userService.getUsers();
}

@Get("/:id")
async getUserById(@Param("id") id: string){
    return await this.userService.getUserById(id);
}

@Put("/:id")
async updateUserById(@Param("id") id: string, @Body() userDto: UserDTO){
    return await this.userService.updateUserById(id, userDto);
}

@Delete("/:id")
async deleteUserById(@Param("id") id: string){
    return await this.userService.deleteUserById(id);
}

}
