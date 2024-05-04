import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
export const POST=async (req)=>{
    await connectDB()
    let body=await req.formData()
    body=object.frontEntries(body)

    let p=await paymentLink.findOne({oid:body.razorpay_order_id})
    if(!p){
        return NextResponse.error("order id not found")
    }
    let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"razorpay_payment_id":body.razorpay_payment_id,"razorpay_signature":body.razorpay_signature},process.env.KEY_SECRET)
}