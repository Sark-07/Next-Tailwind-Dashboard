"use client"
import React from 'react';
import { signIn } from 'next-auth/react';
import {BsGithub, BsLinkedin, BsApple} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoDiscord} from 'react-icons/io5'
import {FcGoogle} from 'react-icons/fc'

export const SignIn = () => {
  
  return (
    <div className='grid grid-cols-2 auto-rows-[100vh] bg-stone-50'>
      <div
        className='left bg-[#4285F4] py-10 px-16 flex flex-col'
        style={{ clipPath: 'polygon(0px 0px, 100% 0px, 73% 100%, 0% 100%)' }}
      >
        <h1 className='text-white text-2xl font-bold'>LOGO</h1>
        <h1 className='text-white text-6xl font-bold my-auto ml-32'>Board.</h1>
        <div className="socials ml-24">
        <ul className='right list-none flex items-center gap-6'>
        <li><a href="#"><BsGithub className='text-4xl text-slate-50'/></a></li>
        <li><a href="#"><BsLinkedin className='text-4xl text-slate-50'/></a></li>
        <li><a href="#"><AiFillTwitterCircle className='text-4xl text-slate-50'/></a></li>
        <li><a href="#"><IoLogoDiscord className='text-4xl text-slate-50'/></a></li>
        </ul>
        </div>
      </div>
      <div className="right flex flex-col justify-center items-center">
          <div className='w-[26.5rem] flex flex-col gap-4'>
          <div>
            <h1 className='text-4xl font-bold'>Sign In</h1>
            <p className='py-3'>Sign in to your account</p>
          </div>
          <div className="auth flex items-center justify-between">
            <div onClick={() => signIn('google')} className='cursor-pointer flex items-center bg-white gap-2 py-2 px-5 rounded-[10px]'>
              <FcGoogle/>
              <p className='text-[#858585] hover:text-black'>Sign in with Google</p>
            </div>
            <div className='cursor-pointer hover:text-black text-[#858585] flex items-center bg-white gap-2 py-2 px-5 rounded-[10px]'>
              <BsApple/>
              <p>Sign in with Apple</p>
            </div>
          </div>
          <form action="" className='bg-white rounded-[20px] p-8 flex flex-col gap-5'>
            <div className="email flex flex-col gap-3 items-start">
              <label htmlFor="Email">Email Address</label>
              <input type="email" placeholder='Enter email' className='w-full px-4 py-2 rounded-lg border-none outline-none bg-[#F5F5F5]'/>
            </div>
            <div className="password flex flex-col gap-3 items-start">
              <label htmlFor="Password">Email Address</label>
              <input type="password" placeholder='Password' className='w-full px-4 py-2 rounded-lg border-none outline-none bg-[#EAEAEA]'/>
            </div>
            <p><a href="#" className='text-[#346BD4]'>Forgot password?</a></p>
            <button className='bg-[#4285F4] text-white rounded-[10px] py-2 '>Sign In</button>
          </form>
          <p className='text-[#858585] mt-4 w-full text-center'>Don't have an account? <span className='text-[#346BD4]'><a href="#">Register here</a></span>
          </p>
          </div>
      </div>
    </div>
  );
};

export default SignIn;
