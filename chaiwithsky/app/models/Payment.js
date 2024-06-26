import mongoose from "mongoose";
const {Schema,model}=mongoose
const PaymentSchema=new Schema({
    oid:{type:String ,required:true},
    Name:{type:String ,required:true},
    to_user:{type:String ,required:true},
    message:{type:String},
    amount:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
    done:{type:Boolean, default:false},
})
export default mongoose.models.Payment || model("Payment",PaymentSchema);