import { mongoose } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username:{
        type : String,
        required : [true,'Please Provide Unique UserName'],
        unique : [true,'User Exist']
    },
    password:{
        type : String,
        required : [true,'Please Provide a Password'],
        unique : false
    },
    email:{
        type : String,
        required : [true,'Please Provide Unique email'],
        unique : [true,'User Exist']
    },
    firstName :{type : String},
    lastName :{type : String},
    address :{type : String},
    mobile :{type : Number},
    profile :{type : String}
})


export default mongoose.model.Users || mongoose.model('User',UserSchema);