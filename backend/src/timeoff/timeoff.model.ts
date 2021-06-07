import * as mongoose from 'mongoose';

export type TimeoffStatus = 'approved' | 'rejected' | 'pending';

export const TimeoffSchema = new mongoose.Schema({
    reason: { type: String, require: true },
    from: { type: Date, require: true },
    to: { type: Date, require: true },
    by: { type: mongoose.Types.ObjectId, require: true, ref: "User" },
    status: { type: String, require: true, default: "pending" }, //Pendding, approve, reject
    pic: { type: mongoose.Types.ObjectId, ref: 'User' }
})


export interface Timeoff extends mongoose.Document {
    id: String;
    reason: String;
    from: Date;
    to: Date;
    by: String;
    status: TimeoffStatus;
    pic: String;
}
