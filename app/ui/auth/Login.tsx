"use client";
import React, { useRef } from 'react'

const Login = () => {
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault(); // Prevent page reload
        const emailValue = email?.current?.value;
        const passwordValue = password.current?.value;

        console.log("Email:", emailValue);
        console.log("Password:", passwordValue);
    }
  return (
      <>
          <form onSubmit={handleSubmit} className='w-96 mx-auto'>
          <div className="mb-4">
              <label className='block' htmlFor="">Email</label>
              <input className='w-full' ref={email} type="email" placeholder='enter your email' />
          </div>
          <div className="mb-4">
              <label className='block' htmlFor="">Password</label>
              <input className='w-full' ref={password} type="password" placeholder='enter your email' />
              </div>
        <div className="mb-4 text-center">
            <button className='bg-black rounded-md text-white px-5 py-2' type='submit'>Login</button>
        </div>
        </form>
      </>
  )
}

export default Login