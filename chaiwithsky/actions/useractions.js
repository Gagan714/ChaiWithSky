"use server"
import Razorpay from "razorpay"
import Payment from "../models/Payment"
import User from "../models/User"
import connectDB from "@/db/connectDB"

export const initiate=async (amount,to_username,paymentform)=>{
    await connectDB()
    let user=await User.findOne({username:to_username})
    let secret=user.razorPaySecret
    var instance = new Razorpay({key_id :user.razorpayID,key_secret:secret})
    let options={
        amount:Number.parseInt(amount),
        currency:"INR"
    }
    let x=await instance.orders.create(options)
    await Payment.create({oid:x.id,amount:amount,to_user:to_username,Name:paymentform.name,message:paymentform.message})
    return x
}

export const fetchuser=async (username)=>{
    await connectDB()
    let u=await User.findOne({username:username})
    let user=u.toObject({flattenObjectIds:true})
    return user
}
export const fetchpayment=async (username)=>{
    await connectDB()
    let p=await Payment.find({to_user:username,done:true}).sort({amount:-1}).lean()
    return p
}
export const updateprofile=async (data,oldusername)=>{
    await connectDB()
    let ndata=Object.fromEntries(data)
    if(oldusername!==ndata.username){
        let u=await User.findOne({username:ndata.username})
        if(u){
            return {error:"username already exists"}
        }
    }
    await User.updateOne({email:ndata.email},ndata)
}
