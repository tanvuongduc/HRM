import * as mongoose from 'mongoose';


export const TeamSchema = new mongoose.Schema({
    code: { type: String, require: true },
    pic: { type: mongoose.Types.ObjectId, require: true, ref: 'User' },
    name: { type: String, require: true },
    sologan: { type: String },
    rate: { type: Number, default: 0 },
    achievements: { type: String, default: '' },
    mission: { type: mongoose.Types.ObjectId },
    department: { type: mongoose.Types.ObjectId, require: true, ref: 'Department' },
    createAt: { type: Date, require: true, default: Date.now() },
    createBy: { type: String, require: true }
})

export interface Team extends mongoose.Document {
    id: String;
    code: String;
    pic: String;
    name: String;
    sologan?: String;
    rate?: Number;
    achievements?: String;
    mission?: String[];
    department: String;
    createAt: Date;
    creatBy: String;
}