import { Injectable, HttpException, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Bank, SocialNetwork, Certificate, UserStatus } from './user.model';
import { CertificateService } from '../certificate/certificate.service'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        @Inject(forwardRef(() => CertificateService)) private readonly certificateService: CertificateService
    ) { }

    async insertUser(
        name: String,
        birthday: Date,
        adress: String,
        certificates: Certificate[],
        phone: String,
        email: String,
        teams: String[],
        password: String,
        socialNetwork: SocialNetwork[],
        bank: Bank,
        status: UserStatus
    ) {

        let user = await this.userModel.findOne().where({ email: email }).exec()
        if (user) {
            throw new HttpException('Email is existed', 400);
        }
        if (!(password && name)) {
            throw new HttpException('Name and password must be not null', 400);
        }
        if (certificates && certificates.length) {
            for (let cer of certificates) {
                await this.certificateService.findCertificateById(cer.id);
                cer.recivedAt = new Date(cer.recivedAt);
                cer.createdAt = new Date(Date.now());
            }
        }
        const newUser = new this.userModel({
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
        });
        const result = await newUser.save();
        return result.id as String;
    }

    async getUserById(uid: String) {
        const user = await this.findUserById(uid);
        if (user.certificates && user.certificates.length) {
            for (let cer of user.certificates) {
                let cert = await this.certificateService.getCertificateById(cer.id);
                Object.assign(cer, cert)
            }
        }
        return {
            id: user.id,
            name: user.name,
            birthday: user.birthday,
            adress: user.adress,
            certificates: user.certificates,
            phone: user.phone,
            email: user.email,
            socialNetwork: user.socialNetwork,
            bank: user.bank,
            status: user.status,
            avatar: user.avatar,
            teams: user.teams
        };
    }

    async updateUser(
        uid: String,
        name: String,
        birthday: Date,
        adress: String,
        certificates: Certificate[],
        phone: String,
        email: String,
        password: String,
        socialNetwork: SocialNetwork[],
        bank: Bank,
        status: UserStatus
    ) {
        await this.userModel.findOne().where({ email: email }).exec()
        const updatedUser = await this.findUserById(uid);
        for (let cer of certificates) {
            await this.certificateService.findCertificateById(cer.id);
            cer.recivedAt = new Date(cer.recivedAt);
        }
        updatedUser.name = name;
        updatedUser.birthday = birthday;
        updatedUser.phone = phone;
        updatedUser.email = email;
        updatedUser.password = password;
        updatedUser.adress = adress;
        updatedUser.socialNetwork = socialNetwork;
        updatedUser.bank = bank;
        updatedUser.status = status;
        const res = await updatedUser.save();
        return {
            id: res.id,
            name: res.name,
            birthday: res.birthday,
            adress: res.adress,
            certificates: res.certificates,
            phone: res.phone,
            email: res.email,
            socialNetwork: res.socialNetwork,
            bank: res.bank,
            status: res.status,
            avatar: res.avatar,
            teams: res.teams
        };
    }

    async updateUserByAdmin(
        uid: String,
        name: String,
        birthday: Date,
        adress: String,
        certificates: Certificate[],
        phone: String,
        email: String,
        password: String,
        socialNetwork: SocialNetwork[],
        bank: Bank,
        status: UserStatus,
        teams: String[]
    ) {
        await this.userModel.findOne().where({ email: email }).exec()
        const updatedUser = await this.findUserById(uid);
        for (let cer of certificates) {
            await this.certificateService.findCertificateById(cer.id);
            cer.recivedAt = new Date(cer.recivedAt);
        }
        updatedUser.birthday = birthday;
        updatedUser.phone = phone;
        updatedUser.adress = adress;
        updatedUser.socialNetwork = socialNetwork;
        updatedUser.bank = bank;
        updatedUser.status = status;
        updatedUser.teams = teams;
        const res = await updatedUser.save();
        return {
            id: res.id,
            name: res.name,
            birthday: res.birthday,
            adress: res.adress,
            certificates: res.certificates,
            phone: res.phone,
            email: res.email,
            socialNetwork: res.socialNetwork,
            bank: res.bank,
            status: res.status,
            avatar: res.avatar,
            teams: res.teams
        };
    }

    async getUsers() {
        const users = await this.userModel.find().exec();
        let res = [];
        for (let user of users) {
            if (user.certificates && user.certificates.length) {
                for (let cer of user.certificates) {
                    let cert = await this.certificateService.getCertificateById(cer.id);
                    Object.assign(cer, cert)
                }
            }
            res.push({
                id: user.id,
                name: user.name,
                birthday: user.birthday,
                adress: user.adress,
                certificates: user.certificates,
                phone: user.phone,
                email: user.email,
                socialNetwork: user.socialNetwork,
                bank: user.bank,
                status: user.status,
                teams: user.teams
            })
        }
        return res;
    }


    async getMembersByTeamId(id: String) {
        const members = await this.userModel.find({ teams: { $all: [id] } })
        return {
            members: members
        }
    }

    async removeTeamIdFromUsers(
        ids: String[],
        teamId: String
    ) {
        const users = await this.userModel.find().where('_id').in(ids).exec()
        if (users.length < 0) throw new HttpException('Nobody here.', 400);
        let res = [];
        for (let user of users) {
            let foundTeam = user.teams.find((team) => {
                return team == teamId;
            })
            if (foundTeam) {
                const index = user.teams.indexOf(teamId)
                user.teams.splice(index, 1);
                const userSaved = await user.save();
                res.push({
                    id: userSaved.id,
                    name: userSaved.name,
                    teams: userSaved.teams
                })
            }
        }
        return res;
    }

    async insertTeamIdForUsers(
        ids: String[],
        teamId: String
    ) {
        const users = await this.userModel.find().where('_id').in(ids).exec()
        if (users.length < 0) throw new HttpException('Nobody here.', 400);
        let res = [];
        for (let user of users) {
            let foundTeam = user.teams.find((team) => {
                return team == teamId;
            })
            if (!foundTeam) {
                user.teams.push(teamId);
                const userSaved = await user.save();
                res.push({
                    id: userSaved.id,
                    name: userSaved.name,
                    teams: userSaved.teams
                })
            }
        }
        return res;
    }

    async findUserById(id: String): Promise<User> {
        let user: any;
        try {
            user = await this.userModel.findById(id).exec();
        } catch (error) {
            throw new HttpException('Could not find user.', 400);
        }
        if (!user) {
            throw new HttpException('Could not find user.', 400);
        }
        return user;
    }

    async findInfoUserByEmail(email: String) {
        let user
        try {
            user = await this.userModel.findOne().where({ email: email }).exec();
        } catch (error) {
            throw new HttpException('Could not find user.', 400);
        }
        if (!user) {
            throw new HttpException('Could not find user.', 400);
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            // birthday: user.birthday,
            // adress: user.adress,
            // certificate: user.certificate,
            // phone: user.phone,
            // socialNetwork: user.socialNetwork,
            // bank: user.bank,
            // status: user.status,
            // avatar: user.avatar,
            // teams: user.teams
        };
    }
}