"use client"
import React, { useState,useEffect } from 'react';
import { useSession,signIn,signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { updateprofile,fetchuser } from '@/actions/useractions';
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
    name: '',
    email: '',
    username: '',
    profilePicture: '',
    coverPicture: '',
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
    alert("Profile updated")
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome to your DashBoard</h2>
      <form action={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
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
          <label htmlFor="profilePicture" className="block mb-1 font-medium">Profile Picture URL</label>
          <input type="text" id="profilePicture" name="profilePicture" value={formData.profilePicture} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="coverPicture" className="block mb-1 font-medium">Cover Picture URL</label>
          <input type="text" id="coverPicture" name="coverPicture" value={formData.coverPicture} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="razorpayID" className="block mb-1 font-medium">Razorpay ID</label>
          <input type="text" id="razorpayID" name="razorpayID" value={formData.razorpayID} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-2">
          <label htmlFor="razorpaySecret" className="block mb-1 font-medium">Razorpay Secret</label>
          <input type="text" id="razorpaySecret" name="razorpay Secret" value={formData.razorPaySecret} onChange={handleChange} className="w-full border border-gray-300 bg-black rounded-md py-1 px-3 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
