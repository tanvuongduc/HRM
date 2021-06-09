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
    title: string;
    desc: string;
}

export interface Overview {
    img: string;
    title: string;
    desc: string;
}

export interface SocialNetwork {
    key: string;
    value: string;
}


export interface Company extends mongoose.Document {
    id: string;
    name: string;
    domain: string;
    website?: string;
    address: string;
    email: string;
    phone: string;
    pic: string;
    socialNetwork?: SocialNetwork[];
    overviews?: Overview[];
    notes?: Note[];
    documents?: string[];
}