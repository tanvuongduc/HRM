import * as mongoose from 'mongoose';



export const DocumentSchema = new mongoose.Schema({
    type: {type:String, require: true},
    link: {type: String, require: true},
    createdAt: {type: Date, default: Date.now()},
})


export interface Document extends mongoose.Document{
    id:String;
    type: String;
    link: String;
    createdAt: Date;
}