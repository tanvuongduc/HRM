import * as mongoose from 'mongoose';




export const CompanySchema = new mongoose.Schema({
    name: { type: String, require: true, default: 'notset' },
    domain: { type: String, default: 'notset' },
    website: { type: String },
    address: { type: String, require: true, default: 'notset' },
    email: { type: String, require: true, default: 'notset' },
    phone: { type: String, require: true, default: 'notset' },
    socialNetwork: {
        type: {
            key: String,
            value: String
        }
    },
    pic: { type: mongoose.Types.ObjectId, require: true, default: null, ref: 'User' },
    overviews: {
        type: {
            img: String,
            title: String,
            desc: String,
        }
    },
    notes: {
        type: {
            title: String,
            desc: String,
        }
    },
    documents: [{ type: mongoose.Types.ObjectId, ref: 'Document' }]
})


export interface Note {
    title: String;
    desc: String;
}

export interface Overview {
    img: String;
    title: String;
    desc: String;
}

export interface SocialNetwork {
    key: String;
    value: String;
}


export interface Company extends mongoose.Document {
    id: String;
    name: String;
    domain: String;
    website?: String;
    address: String;
    email: String;
    phone: String;
    pic: String;
    socialNetwork?: [SocialNetwork];
    overviews?: [Overview];
    notes?: [Note];
    documents?: [String]
}