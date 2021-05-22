import * as mongoose from 'mongoose';




export const CompanySchema = new mongoose.Schema({
    name: { type: String, require: true, default: 'notset' },
    domain: { type: String, default: 'notset' },
    address: { type: String, require: true, default: 'notset' },
    email: { type: String, require: true, default: 'notset' },
    phone: { type: String, require: true, default: 'notset' },
    pic: { type: mongoose.Types.ObjectId, require: true, default: null },
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
    documents:[{type: mongoose.Types.ObjectId, ref: 'Document'}]
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


export interface Company extends mongoose.Document {
    id: String;
    name: String;
    domain: String;
    address: String;
    email: String;
    phone: String;
    pic: String;
    overviews?: [Overview];
    notes?: [Note];
    documents?: [String]
}