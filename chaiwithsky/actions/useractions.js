"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/db/connectDB"

export const initiate=async (amount,to_username,paymentform)=>{
    await connectDB()
    var instance = new Razorpay({key_id :process.env.KEY_ID,key_secret:process.env.KEY_SECRET})
    let options={
        amount:Number.parseInt(amount),
        currency:"INR"
    }
    let x=await instance.orders.create(options)
    await Payment.create({oid:x.id,amount:amount,to_user:to_username,Name:paymentform.name,message:paymentform.message})
    return x
}