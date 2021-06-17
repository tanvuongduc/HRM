import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, require: true },
    avatar: { type: mongoose.Types.ObjectId, ref: 'Upload' },
    birthday: { type: Date, required: true },
    adress: { type: String, require: true },
    certificates: {
        type: {
            name: {
                type: String,
                require: true
            },
            certNo: {
                type: String,
                require: true
            },
            createdAt: {
                type: Date,
                require: true,
                default: Date.now()
            },
            recivedAt: {
                type: Date,
                require: true
            },
            org: {
                type: String,
                require: true
            },
            classification: String,
            major: String,
            note: String,
            degree: {
                type: String,
                require: true
            },
            docs: [String],
            status: {
                type: String,
                require: true,
                default: 'pending'
            },
        },
        require: true
    },
    phone: { type: String, required: true },
    email: { type: String, require: true },
    socialNetwork: {
        type: {
            title: String, //twiter facebook zalo
            url: String
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
    title: string;
    url: string;
}

export type CertificateStatus = 'pending'|'approved'|'rejected'

export interface Certificate {
    name: string;
    certNo?: string;
    createdAt: Date;
    recivedAt: Date;
    org: string;
    classification?: string;
    major?: string;
    note?: string;
    degree: string;
    docs?: string[];
    status: CertificateStatus;
}

export interface Bank {
    bankName: string;
    ownName: string;
    bankNumber: string;
}
export type UserStatus = 'pending' | 'working' | 'retired';

export interface User extends mongoose.Document {
    id: string;
    name: string;
    password: string;
    avatar: string;
    birthday: Date;
    adress: string;
    certificates: Certificate[];
    phone: string;
    email: string;
    socialNetwork: SocialNetwork[];
    bank: Bank;
    status: UserStatus;
    teams: string[];
}