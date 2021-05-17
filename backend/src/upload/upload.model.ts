import * as mongoose from 'mongoose';



export const UploadSchema = new mongoose.Schema({
    type: {type:String, require: true},
    link: {type: String, require: true},
    createdAt: {type: Date, default: Date.now()},
})


export interface Upload extends mongoose.Document{
    id:String;
    type: String;
    link: String;
    createdAt: Date;
}