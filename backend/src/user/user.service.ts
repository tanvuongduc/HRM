import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Bank, SocialNetwork } from './user.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
    ) { }

    async insertUser(
        name: string,
        birthday: Date,
        adress: string,
        certificate: string,
        phone: number,
        email: string,
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
            socialNetwork,
            bank,
        });
        const result = await newUser.save();
        return result.id as string;
    }

    async getUsers() {
        const users = await this.userModel.find().select({name:1}).exec();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            // birthday: user.birthday,
            // adress: user.adress,
            // certificate: user.certificate,
            // phone: user.phone,
            // email: user.email,
            // socialNetwork: user.socialNetwork,
            // bank: user.bank,
            // status: user.status
        }));
    }

    async getSingleUser(uid: string) {
        const user = await this.findUser(uid);
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
            status: user.status
        };
    }

    async updateUser(
        uid: string,
        name: string,
        birthday: Date,
        adress: string,
        certificate: string,
        phone: string,
        email: string,
        socialNetwork: SocialNetwork,
        bank: Bank,
        status: string
    ) {
        const updatedUser = await this.findUser(uid);
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
        if (adress) {
            updatedUser.adress = adress;
        }
        if (socialNetwork) {
            updatedUser.socialNetwork = socialNetwork;
        }
        if(bank){
            updatedUser.bank = bank
        }
        if(status){
            updatedUser.status = status
        }
        const res = await updatedUser.save();
        return {
            id: res.id
        }
    }

    // async deleteUser(uid: string) {
    //     const result = await this.userModel.deleteOne({ _id: uid }).exec();
    //     if (result.n === 0) {
    //         throw new NotFoundException('Could not find User.');
    //     }
    // }

    private async findUser(id: string): Promise<User> {
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