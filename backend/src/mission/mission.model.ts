import * as mongoose from 'mongoose';



export const MissionSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true }, //Leader sẽ phân tích nhiệm vụ chia nhỏ và giao cho thành viên
    department: { type: String, require: true },
    team: { type: String }, //Team ID
    status: { type: String, require: true, default: "Pending" }, //0: canceled 1: pending, 2:Working, 3: complete
    createAt: { type: Date, require: true, default: Date.now() },
    createBy: { type: String, require: true }
})


export interface Mission extends mongoose.Document {
    id: string;
    title: string;
    content: string;
    department: string;
    team: string;
    status: string;
    createAt: Date;
    createBy: string;
}