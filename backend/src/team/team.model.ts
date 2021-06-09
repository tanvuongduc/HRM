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
    id: string;
    code: string;
    pic: string;
    name: string;
    sologan?: string;
    rate?: number;
    achievements?: string;
    mission?: string[];
    department: string;
    createAt: Date;
    creatBy: string;
}