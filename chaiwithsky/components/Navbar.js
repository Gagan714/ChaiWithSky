"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center h-12 px-5">
        <div className="logo font-bold text-xl">ChaiWithSky</div>
        <div>
        <Link href={"/login"}><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">LogIn</button></Link>
        </div>
    </div>
  )
}

export default Navbar