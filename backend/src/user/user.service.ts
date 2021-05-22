import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Bank, SocialNetwork } from './user.model';
import { BASEPATH } from '../base';
import { writeFileSync } from 'fs';
@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async insertUser(
        name: String,
        birthday: Date,
        adress: String,
        certificate: String,
        phone: String,
        email: String,
        password: String,
        socialNetwork: SocialNetwork,
        bank: Bank,
    ) {
        const newUser = new this.userModel({
            name,
            birthday,
            adress,
            certificate,
            phone,
            email,
            password,
            socialNetwork,
            bank,
        });
        const result = await newUser.save();
        return result.id as String;
    }

    async getUsers() {
        const users = await this.userModel.find().exec();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            birthday: user.birthday,
            adress: user.adress,
            certificate: user.certificate,
            phone: user.phone,
            email: user.email,
            socialNetwork: user.socialNetwork,
            bank: user.bank,
            status: user.status,
            teams: user.teams
        }));
    }


    async getMembersByTeamId(id:String){
        const members = await this.userModel.find({teams:{$all:[id]}})
        return {
            members: members
        }
    }
    async removeTeamIdFromUsers(
        ids: [String],
        teamId: String
    ) {
        const users = await this.userModel.find().where('_id').in(ids).exec()
        if (users.length < 0) throw new NotFoundException('Nobody here.');
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
        ids: [String],
        teamId: String
    ) {
        const users = await this.userModel.find().where('_id').in(ids).exec()
        if (users.length < 0) throw new NotFoundException('Nobody here.');
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

    async getUserById(uid: String) {
        const user = await this.findUserById(uid);
        return {
            id: user.id,
            name: user.name,
            birthday: user.birthday,
            adress: user.adress,
            certificate: user.certificate,
            phone: user.phone,
            email: user.email,
            socialNetwork: user.socialNetwork,
            bank: user.bank,
            status: user.status,
            avatar: user.avatar,
            teams: user.teams
        };
    }
    async findInfoUserByEmail(email: String) {
        let user
        try {
            user = await this.userModel.findOne().where({email:email}).exec();
        } catch (error) {
            throw new NotFoundException('Could not find user.');
        }
        if (!user) {
            throw new NotFoundException('Could not find user.');
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
    async updateUser(
        uid: String,
        name: String,
        birthday: Date,
        adress: String,
        certificate: String,
        phone: String,
        email: String,
        password: String,
        socialNetwork: SocialNetwork,
        bank: Bank,
        status: String
    ) {
        const updatedUser = await this.findUserById(uid);
        if (name) {
            updatedUser.name = name;
        }
        if (birthday) {
            updatedUser.birthday = birthday;
        }
        if (certificate) {
            updatedUser.certificate = certificate;
        }
        if (phone) {
            updatedUser.phone = phone;
        }
        if (email) {
            updatedUser.email = email;
        }
        if(password){
            updatedUser.password = password;
        }
        if (adress) {
            updatedUser.adress = adress;
        }
        if (socialNetwork) {
            updatedUser.socialNetwork = socialNetwork;
        }
        if (bank) {
            updatedUser.bank = bank;
        }
        if (status) {
            updatedUser.status = status;
        }
        const res = await updatedUser.save();
        return {
            id: res.id
        }
    }

    async uploadAvatar(
        uid: String,
        avatar: String,
        type: String
    ) {
        const path = `/avatar/${uid}.${type}`;
        const user = await this.findUserById(uid);
        if (user) {

            const data = new Buffer(avatar.split(',')[1], 'base64');
            writeFileSync(BASEPATH + path, data);
            user.avatar = path;
            await user.save()
        }
        return {
            avatar: path
        }
    }

    // async deleteUser(uid: String) {
    //     const result = await this.userModel.deleteOne({ _id: uid }).exec();
    //     if (result.n === 0) {
    //         throw new NotFoundException('Could not find User.');
    //     }
    // }

    async findUserById(id: String): Promise<User> {
        let user: any;
        try {
            user = await this.userModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find user.');
        }
        if (!user) {
            throw new NotFoundException('Could not find user.');
        }
        return user;
    }
}