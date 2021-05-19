import {
    Controller,
    Request,
    Post,
    Body,
    Get,
    Patch,
    UseGuards
} from '@nestjs/common';

import { UsersService } from './user.service';
import { Bank, SocialNetwork } from './user.model'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
@Controller('users')
export class UsersController {


    constructor(private readonly usersService: UsersService) { }


    @UseGuards(JwtAuthGuard)
    @Post()
    async addUser(
        @Body() req,
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



    @UseGuards(JwtAuthGuard)
    @Get('user')
    getUser(
        @Request() req
    ) {
        return this.usersService.getSingleUser(req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAllUsers() {

        const Users = await this.usersService.getUsers();
        return Users;
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    async updateUser(
        @Request() req,
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
            req.user.userId,
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
    @UseGuards(JwtAuthGuard)
    @Post('upload/avatar')
    async uploadAvatar(
        @Request() req,
        @Body('data') data: string,
        @Body('type') type: string
    ) {
        let res = await this.usersService.uploadAvatar(
            req.user.userId,
            data,
            type
        );
        return res;
    }
    // @Delete(':id')
    // async removeUser(@Param('id') uid: string) {
    //     await this.usersService.deleteUser(uid);
    //     return null;
    // }
}