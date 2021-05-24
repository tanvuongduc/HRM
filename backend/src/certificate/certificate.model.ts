import * as mongoose from 'mongoose';


export const CertificateSchema = new mongoose.Schema({
    _id: {
        type: Number,
        alias: 'id',
        required: true,
    },
    name: { type: String, require: true },
    desc: { type: String, require: true }
})

export interface Certificate extends mongoose.Document {
    id: Number;
    name: String;
    desc: String;
}