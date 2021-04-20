import * as mongoose from 'mongoose';



export const MissionSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    team: { type: String },
    human: {type: Number}, //Số lượng người tham gia
    employees: {
        type: {
            id: String, //ID của nhân viên tại bảng User
            name: String,// Tên của nhân viên tại bảng User
            modules: String,// Công việc phải làm sau khi team phân tích content
            status: Boolean, // Đang làm, hoàn thành
            evaluate: Number,
        }
    },
    status: { type: Number, require: true } //0: canceled 1: pending, 2:Working, 3: complete
})