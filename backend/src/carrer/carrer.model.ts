import * as mongoose from 'mongoose';

export const CarrerSchema = new mongoose.Schema({
    description: {
        type: String,
        require:true
    },
    achievements: {
        type: String,
        require:true
    },
    salary: {
        type:Number
    },
    stage: {
        type:Date
    }
})

export interface Carrer extends mongoose.Document{
    id: String,
    description: String,
    achievements: String,
    salary: Number,
    stage:Date
}