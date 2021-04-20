import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';

import { UsersService } from './user.service';
import { Bank, SocialNetwork } from './user.model'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async addUser(
        @Body('name') name: string,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: string,
        @Body('certificate') certificate: string,
        @Body('phone') phone: number,
        @Body('email') email: string,
        @Body('socialNetwork') socialNetwork: [SocialNetwork],
        @Body('bank') bank: Bank,
    ) {
        const generatedId = await this.usersService.insertUser(
            name,
            birthday,
            adress,
            certificate,
            phone,
            email,
            socialNetwork,
            bank,
        );
        return { id: generatedId };
    }

    @Get()
    async getAllUsers() {
        const Users = await this.usersService.getUsers();
        return Users;
    }

    @Get(':id')
    getUser(@Param('id') uid: string) {
        return this.usersService.getSingleUser(uid);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') uid: string,
        @Body('name') name: string,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: string,
        @Body('certificate') certificate: string,
        @Body('phone') phone: number,
        @Body('email') email: string,
        @Body('socialNetwork') socialNetwork: [SocialNetwork],
        @Body('bank') bank: Bank,
    ) {
        await this.usersService.updateUser(
            uid,
            name,
            birthday,
            adress,
            certificate,
            phone,
            email,
            socialNetwork,
            bank,
        );
        return null;
    }

    @Delete(':id')
    async removeUser(@Param('id') uid: string) {
        await this.usersService.deleteUser(uid);
        return null;
    }
}