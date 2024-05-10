import mongoose from "mongoose";
const {Schema,model}=mongoose
const UserSchema=new Schema({
    email:{type:String ,required:true},
    Name:{type:String},
    username:{type:String,required:true },
    profilepic:{type:String },
    coverpic:{type:String },
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
    razorpayID:{type:String},
    razorPaySecret:{type:String},
});
export default mongoose.models.User || model("User",UserSchema);