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
import { Bank, SocialNetwork, Certificate } from './user.model'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';



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
        @Body('certificates') certificates: [Certificate],
        @Body('phone') phone: String,
        @Body('email') email: String,
        @Body('password') password: String,
        @Body('teams') teams: [String],
        @Body('socialNetwork') socialNetwork: SocialNetwork,
        @Body('bank') bank: Bank,
        @Body('status') status: String
    ) {
        const generatedId = await this.usersService.insertUser(
            name,
            birthday,
            adress,
            certificates,
            phone,
            email,
            teams,
            password,
            socialNetwork,
            bank,
            status
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
        @Param('id') id: String
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
        @Param('id') id: String,
        @Body('name') name: String,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: String,
        @Body('certificate') certificates: [Certificate],
        @Body('phone') phone: String,
        @Body('email') email: String,
        @Body('password') pasword: String,
        @Body('socialNetwork') socialNetwork: SocialNetwork,
        @Body('bank') bank: Bank,
        @Body('status') status: String,
        @Body('teams') teams: [String]
    ) {
        let res = await this.usersService.updateUserByAdmin(
            id,
            name,
            birthday,
            adress,
            certificates,
            phone,
            email,
            pasword,
            socialNetwork,
            bank,
            status,
            teams
        );
        return res;
    }


    @UseGuards(JwtAuthGuard)
    @Patch()
    async updateUser(
        @Request() req,
        @Body('name') name: String,
        @Body('birthday') birthday: Date,
        @Body('adress') adress: String,
        @Body('certificate') certificates: [Certificate],
        @Body('phone') phone: String,
        @Body('email') email: String,
        @Body('password') pasword: String,
        @Body('socialNetwork') socialNetwork: SocialNetwork,
        @Body('bank') bank: Bank,
        @Body('status') status: String
    ) {
        let res = await this.usersService.updateUser(
            req.user.userId,
            name,
            birthday,
            adress,
            certificates,
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