import mongoose from "mongoose";
const {Schema,model}=mongoose
const PaymentSchema=new Schema({
    Name:{type:String ,required:true},
    to_user:{type:String ,required:true},
    oid:{type:String ,required:true},
    message:{type:String},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
    done:{type:Boolean, default:false},
})
const Payment=model("Payment",PaymentSchema);
export default mongoose.models.Payment || Payment;