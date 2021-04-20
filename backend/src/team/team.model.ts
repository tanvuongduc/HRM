import * as mongoose from 'mongoose';



export const TeamSchema = new mongoose.Schema({
    leader: {
        type: {
            id: String,
            name: String
        },
        require: true
    },
    member: {
        type: {
            id: String,
            name: String
        },
        require: true
    },
    rate: {type: Number, require: true},
    achievements: {type: String},           //Những nhiệm vụ đã hoàn thành sẽ đk coi là thành tích nhóm
    mission: {type: String}                 //Id của nhiệm vụ đang thực hiện, nếu trống thì là đang rảnh
})