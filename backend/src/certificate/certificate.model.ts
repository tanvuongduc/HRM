import * as mongoose from 'mongoose';


export const CertificateSchema = new mongoose.Schema({
    code: { type: String, require: true },
    name: { type: String, require: true },
    desc: { type: String, require: true }
})

export interface Certificate extends mongoose.Document {
    id: string;
    code: string;
    name: string;
    desc: string;
}