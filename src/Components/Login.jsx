import React from 'react'
import loginImg from "../assets/stylish.jpg"

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='hidden sm:block h-screen w-full'>
         <img className='w-full h-full object-cover' src={loginImg} alt='' />
         </div>
         <div className='bg-green-400 flex flex-col justify-center p-12'>
            <form className='max-w-[400] w-full mx-auto bg-green-950 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none' type='text'/>
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-green-800 focus:outline-none' type='password'/>
                </div>
                <div className='flex justify-between text-white py-2 '>
                    <p className='flex items-center'><input className='mr-2' type='checkbox'/>Remember Me</p>
                    <p>Forget Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-yellow-500  shadow-yellow-500/50 hover:bg-green-600 text-white font-semibold rounded-lg '>Sign In</button>
            </form>
         </div>
    </div>
  )
}
