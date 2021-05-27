import * as mongoose from 'mongoose';



export const TimeoffSchema = new mongoose.Schema({
    reason: { type: String, require: true },
    from: { type: Date, require: true },
    to: { type: Date, require: true },
    by: { type: String, require: true },
    status: { type: String, require: true, default: "Pendding" }, //Pendding, approve, reject
    pic: { type: mongoose.Types.ObjectId , ref: 'User'}
})


export interface Timeoff extends mongoose.Document {
    id: String;
    reason: String;
    from: Date;
    to: Date;
    by: String;
    status: String;
    pic: String;
}