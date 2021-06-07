import * as mongoose from 'mongoose';

export const DepartmentSchema = new mongoose.Schema({
    code: {type: String, require: true},
    name: { type: String, require: true },
    pic: { type: mongoose.Types.ObjectId, require: true, ref: 'User' },
    desc: { type: String },
    createdAt: { type: Date, default: Date.now() },
    documents: [{type: mongoose.Types.ObjectId, ref: 'Document'}]
})

export interface Department extends mongoose.Document {
    id: String;
    code: String;
    name: String;
    pic: String;
    desc?: String;
    createdAt: Date;
    documents: String[];
}