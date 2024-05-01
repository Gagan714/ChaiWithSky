import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center h-12 px-5">
        <div className="logo font-bold text-xl">ChaiWithSky</div>
        <div>
            <ul className="flex gap-3">
                <li>Home</li>
                <li>About</li>
                <li>SignUp</li>
                <li>LogIn</li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar