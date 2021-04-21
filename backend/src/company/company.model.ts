import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    domain:{
        type: String
    },
    overview:{
        type: String
    },
    address:{
        type: String
    },
    contact:{
        type: String
    },
    pic:{
        type: String
    },
    notes:{
        type: String
    }
})

export interface Company extends mongoose.Document {
    id: string;
    name: string;
    domain: string;
    overview: string;
    address: string;
    contact: string;
    pic: string;
    notes: string;
}