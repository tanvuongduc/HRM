import * as mongoose from 'mongoose';


export interface SocialNetwork {
  title: string;
  link: string;
}
// interface Certificate{
//   title: string;
// }
export interface Bank {
  bankName: string;
  bankNumber: string;
}


export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthday: { type: Date, required: true },
  adress: { type: String, require: true },
  certificate: { type: String },
  phone: { type: String, required: true },
  email: { type: String, require: true },
  socialNetwork: [{
    title: String,
    link: String
  }],
  bank: {
    type: { bankName: String, bankNumber: String },
    require: true
  }
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  birthday: Date;
  adress: string;
  certificate: string;
  phone: string;
  email: string;
  socialNetwork: [SocialNetwork];
  bank: Bank;
}