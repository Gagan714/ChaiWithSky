"use client"
import React from 'react'
import Script from 'next/script'

const PaymentPage = ({username}) => {
    const pay=(amount,orderId)=>{
            var options = {
                "key": process.env.KEY_ID ,// Enter the Key ID generated from the Dashboard
                "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Get me a chai", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": `${process.env.URL}/api/razorpay`,
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": "Gaurav Kumar", //your customer's name
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1=new Razorpay(options);
            rzp1.open();
    }
  return (
    <>
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

<div className="relative">
  <img className="relative w-full h-[340px]" src="https://pas-bp-wp-cdn.s3.amazonaws.com/bplans/content/uploads/2023/11/03154343/How-to-Write-Your-Business-Plan-Cover-Page-Template.png" alt=''></img>
  <img className="absolute top-[266px] right-[46.5%] w-28 h-28 rounded-full" src="https://cdn.dribbble.com/userupload/11428818/file/original-e26099b859f5de5bb632ee44ec1a502d.jpg?resize=400x300&vertical=center" alt=''></img>
  </div>
  <div className="flex flex-col justify-center gap-2 items-center mt-12">
<div className="text-white text-base font-bold">@{username}</div>
<div className="text-slate-400 text-sm">Creating Animated Art for SkyNetworks</div>
<div className="text-slate-400 text-sm">9718 members . 69 posts . $15,240/release</div>
  </div>
  <div className="flex w-full justify-center gap-5 items center my-4">
    <div className=" bg-slate-900 rounded-lg w-1/3">
      <div className="text-center font-bold text-xl my-3">Supporters</div> 
      <ul>
        <div className="flex items-center ml-2">
          <img width={30} src="avatar.png" alt=""/>
        <li className=" my-3 mx-2">Gagan donated <span className="font-bold">30$</span> with a message "U r awesome bro"</li>
        </div>
      </ul>
    </div>
    <div className=" bg-slate-900 rounded-lg w-1/3">
      <div className="text-center font-bold text-xl mt-3 mb-5">Make a payment</div>
      <div className="flex flex-col items-center gap-2">
        <input className="bg-slate-800 w-4/5 rounded-lg p-2 outline-none" type="text" placeholder="Enter Name"/>
        <input className="bg-slate-800 w-4/5 rounded-lg p-2  outline-none" type="text" placeholder="Enter Message"/>
        <input className="bg-slate-800 w-4/5 rounded-lg p-2 outline-none" type="text" placeholder="Enter Amount"/>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2 text-center me-2 mb-2">Pay</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default PaymentPage