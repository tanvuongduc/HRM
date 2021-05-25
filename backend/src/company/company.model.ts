import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    documents: {
        id: String,
        title: String,
        description: String
    },
    contact: {
        phone: Number,
        domain: String,
        email: String,
        address: String
    },
    pic: {
        type: String
    }

})
export interface Documents {
    id: string;
    title: string;
    description: string;
}
export interface Contact {
    phone: number;
    domain: string;
    email: string;
    address: string;
}

export interface Company extends mongoose.Document {
    id: string;
    name: string;
    documents: Documents;
    contact: Contact;
    pic: string;
}