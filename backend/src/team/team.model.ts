import * as mongoose from 'mongoose';



// interface module {
//     content: String,    // Nội dung công việc phải làm sau khi team phân tích mission content
//     status: Boolean,    // Đang làm, hoàn thành
//     evaluate: String,   //Đánh giá
// }


export const TeamSchema = new mongoose.Schema({
    name: { type: String, require: true },
    member: {
        type: {
            uid: String,
            name: String,
            regency: Number, // Leader 1, employee: 0s
        },
        require: true
    },
    rate: { type: Number, require: true, default: 0},
    achievements: { type: String, default:''},             //Những nhiệm vụ đã hoàn thành sẽ đk coi là thành tích nhóm
    mission: { type: String, default:'' },                  //Id của nhiệm vụ đang thực hiện, nếu trống thì là đang rảnh
    department: { type: String, require: true } //Phòng ban
})

export interface Employee {
    uid: String,
    name: String,
    regency: Number
}
export interface Team extends mongoose.Document{
    id:String;
    name: String;
    member: Employee;
    rate: Number;
    achievements: String;             
    mission: String;                  
    department: String;
}