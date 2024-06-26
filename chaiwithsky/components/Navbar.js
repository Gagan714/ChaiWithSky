"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from "react"

const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  return (
    <div className="bg-gray-900 text-white flex flex-col md:flex-row md:justify-between items-center md:h-12 px-5">
      <div><Link href="/" className="logo font-bold text-xl">ChaiWithSky</Link></div>
      <div className="relative">
        {session && <>
          <button id="dropdownDefaultButton" onClick={()=>setshowdropdown(!showdropdown)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 mx-1 md:mx-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>
          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px]  divide-y divide-gray-100 rounded-lg shadow mt-1 w-44 bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link onClick={()=>setshowdropdown(!showdropdown)} href="/dashboard" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link onClick={()=>setshowdropdown(!showdropdown)} href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              
            </ul>
          </div>
        </>
        }
        {session && <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2" onClick={() => { signOut() }}>LogOut</button>}
        {!session && <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2">LogIn</button></Link>}
      </div>
    </div>
  )
}

export default Navbar