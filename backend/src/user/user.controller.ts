import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Query,
} from '@nestjs/common';

import { UsersService } from './user.service';
import { Bank, SocialNetwork } from './user.model'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    //for admin
    async addUser(
        @Body('name') name: string,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: string,
        @Body('certificate') certificate: string,
        @Body('phone') phone: number,
        @Body('email') email: string,
        @Body('socialNetwork') socialNetwork: SocialNetwork,
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

    @Get('user')
    getUser(@Query('id') uid: string) {
        return this.usersService.getSingleUser(uid);
    }
    @Get()
    // for admin
    async getAllUsers() {
        const Users = await this.usersService.getUsers();
        return Users;
    }

    @Patch(':id')
    //update info user
    async updateUser(
        @Param('id') uid: string,
        @Body('name') name: string,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: string,
        @Body('certificate') certificate: string,
        @Body('phone') phone: string,
        @Body('email') email: string,
        @Body('socialNetwork') socialNetwork: SocialNetwork,
        @Body('bank') bank: Bank,
        @Body('status') status: string
    ) {
        
        let res = await this.usersService.updateUser(
            uid,
            name,
            birthday,
            adress,
            certificate,
            phone,
            email,
            socialNetwork,
            bank,
            status
        );
        return res;
    }

    // @Delete(':id')
    // async removeUser(@Param('id') uid: string) {
    //     await this.usersService.deleteUser(uid);
    //     return null;
    // }
}