"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import GlobalApi from './_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

export default function Home() {
  const { user } = useUser();

  useEffect(() => {
    user && createUserProfile();
  }, [user]);

  const createUserProfile = () => {
    if(!localStorage.getItem('isLogin')){
      const data = {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        image: user.imageUrl
      };
  
      GlobalApi.createUser(data).then(resp => {
        localStorage.setItem("isLogin",true)
        toast.success("Your Signed In succesasfully")
      });
    }
  };

  return (
    <div>
      {/* Your JSX content goes here */}
    </div>
  );
}
