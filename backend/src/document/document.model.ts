import * as mongoose from 'mongoose';



export const DocumentSchema = new mongoose.Schema({
    fileName: { type: String, require: true },
    extension: { type: String, require: true },
    url: { type: String, require: true },
    createdAt: { type: Date, default: Date.now() },
})


export interface Document extends mongoose.Document {
    id: String;
    fileName: String;
    extension: String;
    url: String;
    createdAt: Date;
}