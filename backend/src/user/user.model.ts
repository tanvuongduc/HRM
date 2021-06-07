import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, require: true },
    avatar: { type: mongoose.Types.ObjectId, ref: 'Upload' },
    birthday: { type: Date, required: true },
    adress: { type: String, require: true },
    certificates: {
        type: {
            id: mongoose.Types.ObjectId,
            recivedAt: Date,
            createdAt: Date,
            note: String
        },
        require: true
    },
    phone: { type: String, required: true },
    email: { type: String, require: true },
    socialNetwork: {
        type: {
            title: String, //twiter facebook zalo
            link: String
        },
        default: null
    },
    bank: {
        type: { bankName: String, ownName: String, bankNumber: String },
        require: true
    },
    status: {
        type: String,
        require: true,
        default: "pending"
    },
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team', default: [] }]
});

export interface SocialNetwork {
    title: String;
    link: String;
}
export interface Certificate {
    id: String;
    recivedAt: Date;
    createdAt: Date;
    note: String;
}
export interface Bank {
    bankName: String;
    ownName: String;
    bankNumber: String;
}
export type UserStatus = 'pending' | 'working' | 'retired';

export interface User extends mongoose.Document {
    id: String;
    name: String;
    password: String;
    avatar: String;
    birthday: Date;
    adress: String;
    certificates: Certificate[];
    phone: String;
    email: String;
    socialNetwork: SocialNetwork[];
    bank: Bank;
    status: UserStatus;
    teams: String[];
}