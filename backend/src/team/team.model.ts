import * as mongoose from 'mongoose';



export const TeamSchema = new mongoose.Schema({
    name: { type: String, require: true },
    leader: {
        type: {
            uid: String,
            name: String
        },
        require: true
    },
    member: {
        type: {
            uid: String,
            name: String,
            module: String,    // Nội dung công việc phải làm sau khi team phân tích mission content
            status: Boolean,    // Đang làm, hoàn thành
            evaluate: Number,
        },
        require: true
    },
    rate: { type: Number, require: true },
    achievements: { type: String },             //Những nhiệm vụ đã hoàn thành sẽ đk coi là thành tích nhóm
    mission: { type: String },                  //Id của nhiệm vụ đang thực hiện, nếu trống thì là đang rảnh
    department: { type: String, require: true } //Phòng ban
})