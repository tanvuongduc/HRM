import * as mongoose from 'mongoose';



export const MissionSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true }, //Leader sẽ phân tích nhiệm vụ chia nhỏ và giao cho thành viên
    team: { type: String }, //Team ID
    employees: {
        type: {
            uid: String, //ID của nhân viên tại bảng User
            name: String,// Tên của nhân viên tại bảng User
            modules: String,// Công việc phải làm sau khi team phân tích content
            status: Boolean, // Đang làm, hoàn thành
            evaluate: Number, // Mặc định là 0 sau khi hoàn thành sẽ đk chấm điểm
        }
    },
    status: { type: Number, require: true }, //0: canceled 1: pending, 2:Working, 3: complete
    createAt: { type: Date, require: true, default: Date.now() },
    createBy: { type: String, require: true }
})