import * as mongoose from 'mongoose';


export interface SocialNetwork {
  title: String;
  icon: String;
  link: String;
}
// interface Certificate{
//   title: String;
// }
export interface Bank {
  bankName: String;
  bankNumber: String;
}


export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, require: true},
  avatar: {type: mongoose.Types.ObjectId, ref: 'Upload'},
  birthday: { type: Date, required: true },
  adress: { type: String, require: true },
  certificate: { type: String },
  phone: { type: String, required: true },
  email: { type: String, require: true },
  socialNetwork: {
    type: {
      title: String, //twiter facebook zalo
      icon: String,
      link: String
    },
    require: true
  },
  bank: {
    type: { bankName: String, bankNumber: String },
    require: true
  },
  status: {
    type: String,
    require: true,
    default: "Pending"
  },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team', default:[] }]
});

export interface User extends mongoose.Document {
  id: String;
  name: String;
  password: String;
  avatar: String;
  birthday: Date;
  adress: String;
  certificate: String;
  phone: String;
  email: String;
  socialNetwork: SocialNetwork;
  bank: Bank;
  status: String;
  teams: [String];
}