import * as mongoose from 'mongoose';



// interface module {
//     content: String,    // Nội dung công việc phải làm sau khi team phân tích mission content
//     status: Boolean,    // Đang làm, hoàn thành
//     evaluate: String,   //Đánh giá
// }


export const TeamSchema = new mongoose.Schema({
    name: { type: String, require: true },
    sologan: {type:String},
    rate: { type: Number, require: true, default: 0 },
    achievements: { type: String, default: '' },             //Những nhiệm vụ đã hoàn thành sẽ đk coi là thành tích nhóm
    mission: { type: String, default: '' },                  //Id của nhiệm vụ đang thực hiện, nếu trống thì là đang rảnh
    department: { type: String, require: true },             //Phòng ban
    createAt: { type: Date, require: true, default: Date.now() },
    createBy: { type: String, require: true}
})

export interface Employee {
    uid: String,
    name: String,
    office: String,
    regency: Number
}
export interface Team extends mongoose.Document {
    id: String;
    name: String;
    sologan: String;
    rate: Number;
    achievements: String;
    mission: String;
    department: String;
    createAt: Date;
    creatBy: String;
}