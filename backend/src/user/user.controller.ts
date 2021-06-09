import { CompanyService } from './../company/company.service';
import { CertificatesValidate, UserStatusValidate, BankValidate, SocialNetworksValidate } from './user.validate';
import { isStringRequired, isDateRequired, isPhoneNumberRequired, isEmailRequired, isArrayString } from './../validator/joi.validate';
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
import { Bank, SocialNetwork, Certificate, UserStatus } from './user.model'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';



@Controller('users')
export class UsersController {


    constructor(
        private readonly usersService: UsersService,
        private readonly companyService: CompanyService
    ) { }
    // @UseGuards(JwtAuthGuard)
    @Post()
    async insertUser(
        // @Body() req,
        @Body('name', isStringRequired) name: string,
        @Body('birthday', isDateRequired) birthday: Date,
        @Body('adress', isStringRequired) adress: string,
        @Body('certificates', CertificatesValidate) certificates: Certificate[],
        @Body('phone', isPhoneNumberRequired) phone: string,
        @Body('email', isEmailRequired) email: string,
        @Body('password', isStringRequired) password: string,
        @Body('teams', isArrayString) teams: string[],
        @Body('socialNetwork', SocialNetworksValidate) socialNetwork: SocialNetwork[],
        @Body('bank', BankValidate) bank: Bank,
        @Body('status', UserStatusValidate) status: UserStatus
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
        @Param('id', isStringRequired) id: string
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
        @Param('id', isStringRequired) id: string,
        @Body('name', isStringRequired) name: string,
        @Body('birthday', isDateRequired) birthday: Date,
        @Body('adress', isStringRequired) adress: string,
        @Body('certificate', CertificatesValidate) certificates: Certificate[],
        @Body('phone', isPhoneNumberRequired) phone: string,
        @Body('email', isEmailRequired) email: string,
        @Body('password', isStringRequired) pasword: string,
        @Body('socialNetwork', SocialNetworksValidate) socialNetwork: SocialNetwork[],
        @Body('bank', BankValidate) bank: Bank,
        @Body('status', UserStatusValidate) status: UserStatus,
        @Body('teams', isArrayString) teams: string[]
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
        @Body('name', isDateRequired) name: string,
        @Body('birthday', isDateRequired) birthday: Date,
        @Body('adress', isStringRequired) adress: string,
        @Body('certificate', CertificatesValidate) certificates: Certificate[],
        @Body('phone', isPhoneNumberRequired) phone: string,
        @Body('email', isEmailRequired) email: string,
        @Body('password', isStringRequired) pasword: string,
        @Body('socialNetwork', SocialNetworksValidate) socialNetwork: SocialNetwork[],
        @Body('bank', BankValidate) bank: Bank,
        @Body('status', UserStatusValidate) status: UserStatus
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