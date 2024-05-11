"use client"
import React, { useState,useEffect } from 'react';
import { useSession,signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { updateprofile,fetchuser } from '@/actions/useractions';
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
  const {data:Session,update}=useSession()
  const router=useRouter()
  useEffect(() => {
    if(!Session){
      router.push('/login')
    }else{
      getData()
    }
    console.log(Session)
  }, [router,Session])
  const getData=async ()=>{
    let u=await fetchuser(Session.user.name)
    setFormData(u)
  }
  
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    username: '',
    profilepic: '',
    coverpic: '',
    razorpayID: '',
    razorPaySecret:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    update()
    let a=updateprofile(e,Session.user.name)
    toast('Profile Updated', {
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
  };

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
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome to your DashBoard</h2>
      <form action={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="Name" className="block mb-1 font-medium">Name</label>
          <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="username" className="block mb-1 font-medium">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="profilepic" className="block mb-1 font-medium">Profile Picture URL</label>
          <input type="text" id="profilepic" name="profilepic" value={formData.profilepic} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="coverpic" className="block mb-1 font-medium">Cover Picture URL</label>
          <input type="text" id="coverpic" name="coverpic" value={formData.coverpic} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="razorpayID" className="block mb-1 font-medium">Razorpay ID</label>
          <input type="text" id="razorpayID" name="razorpayID" value={formData.razorpayID} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="razorPaySecret" className="block mb-1 font-medium">Razorpay Secret</label>
          <input type="text" id="razorPaySecret" name="razorPaySecret" value={formData.razorPaySecret} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Dashboard;
