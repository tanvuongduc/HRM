import * as mongoose from 'mongoose';



export const TimeoffSchema = new mongoose.Schema({
    reason: { type: String, require: true },
    from: { type: Date, require: true },
    to: { type: Date, require: true },
    by: { type: String, require: true },
    status: { type: String, require: true }, //Pendding, approve, reject
    censor: { type: String, default: "" }
})


export interface Timeoff extends mongoose.Document {
    reason: String;
    from: Date;
    to: Date;
    by: String;
    status: String;
    censor: String;
}