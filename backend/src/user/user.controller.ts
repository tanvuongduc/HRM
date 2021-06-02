import {
    Controller,
    Request,
    Post,
    Body,
    Get,
    Patch,
    UseGuards,
    Param
} from '@nestjs/common';

import { UsersService } from './user.service';
import { Bank, SocialNetwork } from './user.model'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { identity } from 'rxjs';



@Controller('users')
export class UsersController {


    constructor(private readonly usersService: UsersService) { }


    // @UseGuards(JwtAuthGuard)
    @Post()
    async insertUser(
        // @Body() req,
        @Body('name') name: String,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: String,
        @Body('certificate') certificate: String,
        @Body('phone') phone: String,
        @Body('email') email: String,
        @Body('password') password: String,
        @Body('teams') teams: [String],
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
            teams,
            password,
            socialNetwork,
            bank
        );
        return { id: generatedId };
    }



    @UseGuards(JwtAuthGuard)
    @Get('myinfo')
    getMyInfomation(
        @Request() req
    ) {
        return this.usersService.getUserById(req.user.userId);
    }

    @Get(':id')
    getUserById(
        @Param('id') id : String
    ) {
        return this.usersService.getUserById(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Get()
    async getAllUsers() {
        const Users = await this.usersService.getUsers();
        return Users;
    }

    @Patch(':id')
    async updateUserByAdmin(
        @Request() req,
        @Param('id') id,
        @Body('name') name: string,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: string,
        @Body('certificate') certificate: string,
        @Body('phone') phone: string,
        @Body('email') email: string,
        @Body('password') pasword: String,
        @Body('socialNetwork') socialNetwork: SocialNetwork,
        @Body('bank') bank: Bank,
        @Body('status') status: string
    ) {
        let res = await this.usersService.updateUser(
            id,
            name,
            birthday,
            adress,
            certificate,
            phone,
            email,
            pasword,
            socialNetwork,
            bank,
            status
        );
        return res;
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
        @Body('password') pasword: String,
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
            pasword,
            socialNetwork,
            bank,
            status
        );
        return res;
    }
}