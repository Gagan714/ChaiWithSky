"use client"
import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // Redirect on client side only
      window.location.href = "/dashboard";
    }
  }, [session]);

  return (
    <>
      <div className="text-white py-12 container mx-auto">
        <div className="text-2xl font-bold text-white text-center pb-8">Login to Get Your Fans to Support You</div>
        <div className="flex flex-col gap-1 justify-center items-center">
          {/* Your login buttons */}
        </div>
      </div>
    </>
  );
}

export default Login;
