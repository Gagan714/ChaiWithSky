"use client"
import React,{useEffect, useState} from 'react'
import Script from 'next/script'
import { fetchpayment, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { fetchuser } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation';

const PaymentPage = ({username}) => {
  const {data:session}=useSession()
  const [paymentform, setpaymentform] = useState({name:"",message:"",amount:""})
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setpayments] = useState([])
  const searchParams=useSearchParams()
  const router=useRouter()
  useEffect(() => {
    if(!session){
      router.push('/login')
    }
  }, [session])
  useEffect(() => {
    getData()
    
  }, [])
  useEffect(() => {
    if(searchParams.get("paymentdone")=="true"){
      toast('Thanks For Your Donation', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    router.push(`/${username}`)
  }, [])
  
  
  const handlechange=(e)=>{
    setpaymentform({...paymentform,[e.target.name]:e.target.value})
  }
  const getData=async (params)=>{
    let u= await fetchuser(username)
    setcurrentUser(u)
    let dbpayments=await fetchpayment(username)
    setpayments(dbpayments)
  }
    const pay=async (amount)=>{
      let a=await initiate(amount,username,paymentform)
      let orderId=a.id
            var options = {
                "key": currentUser.razorpayID ,// Enter the Key ID generated from the Dashboard
                "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Get me a chai", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
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
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
{/* Same as */}
<ToastContainer />
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

<div className="relative">
  <img className="relative w-full h-[340px]" src={currentUser.coverpic} alt=''></img>
  <img className="absolute top-[79%] right-[38%] md:right-[46%] w-28 h-28 rounded-full" src={currentUser.profilepic} alt=''></img>
  </div>
  <div className="flex flex-col justify-center gap-2 items-center mt-12">
<div className="text-white text-base font-bold">@{username}</div>
<div className="text-slate-400 text-sm">Lets help {currentUser.Name} get a chai</div>
<div className="text-slate-400 text-sm">{payments.length} Payments . {currentUser.Name} has raised ₹{payments.reduce((a,b)=>a+b.amount,0)/100}</div>
  </div>
  <div className="flex flex-col md:flex-row w-full justify-center gap-5 items center my-4">
    <div className=" bg-slate-900 mx-auto rounded-lg w-3/4 md:w-1/3">
      <div className="text-center font-bold text-xl my-3">Supporters</div> 
      <ul>
        {payments.length==0 && <li className="my-3 mx-2">No Payments yet</li>}
  {payments.map((p, i) => (
    <li key={i} className="flex items-center ml-2">
      <img width={30} src="avatar.png" alt="" />
      <span className="my-3 mx-2">
        {p.Name} donated <span className="font-bold">₹{p.amount/100}</span> with a message "{p.message}"
      </span>
    </li>
  ))}
</ul>

    </div>
    <div className=" bg-slate-900 rounded-lg mx-auto w-3/4 md:w-1/3">
      <div className="text-center font-bold text-xl mt-3 mb-5">Make a payment</div>
      <div className="flex flex-col items-center gap-2">
        <input onChange={handlechange} value={paymentform.name} name="name" className="bg-slate-800 w-4/5 rounded-lg p-2 outline-none" type="text" placeholder="Enter Name"/>
        <input name="message" onChange={handlechange} value={paymentform.message} className="bg-slate-800 w-4/5 rounded-lg p-2  outline-none" type="text" placeholder="Enter Message"/>
        <input name="amount" onChange={handlechange} value={paymentform.amount}  className="bg-slate-800 w-4/5 rounded-lg p-2 outline-none" type="text" placeholder="Enter Amount"/>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-2 text-center me-2 mb-2 disabled:from-black"disabled={paymentform.name?.length<4 || paymentform.amount?.length<1} onClick={()=>pay(paymentform.amount*100)}>Pay</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default PaymentPage