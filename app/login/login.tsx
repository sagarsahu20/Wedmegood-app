import React from 'react'

function login() {
  return (
    <div className='flex justify-center '>
    <div className='border mt-[30px] flex h-[650px] w-[75%] shadow'>
        <div className='bg-pink-500 w-3/6 overflow-hidden relative'>
        <h5 className='absolute text-4xl font-semibold ml-4 mt-4 line-clamp-2 w-[450px]'>India’s Favourite Wedding Planning Platform</h5>
        <img src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full"alt="Couple Image" />
        </div>
        <div className='w-3/6 flex flex-col items-center'>
            <h1 className='text-black text-3xl font-[600] mt-8'>Sign In/Sign UP</h1>
            <input className='w-11/12 border h-12 p-2 rounded-md mt-4' placeholder='Enter your e-mail or mobile'/>
            <h6 className='my-10 text-black'>-------------- OR --------------</h6>
            <p className='text-black font-medium text-2xl'>Continue With</p>
            <div className=''>

            </div>
        </div>
    </div>
    </div>
  )
}

export default login