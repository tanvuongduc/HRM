import * as mongoose from 'mongoose';

export const DepartmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String
    },
    description:{
        type: String
    },
    PIC:{
        type: String
    },
    
})

export interface Department extends mongoose.Document {
    id: string;
    name: string;
    code: string;
    description: string;

}