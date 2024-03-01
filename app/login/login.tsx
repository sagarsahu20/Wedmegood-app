
import React from 'react'

function login() {
  return (
    <div className='flex justify-center '>
      <div className='border mt-[30px] flex h-[650px] w-3/5 max-w-7xl shadow'>
        <div className='bg-pink-500 w-3/6 overflow-hidden relative'>
          <h5 className='absolute text-4xl font-semibold ml-4 mt-4 line-clamp-2 w-[450px]'>India’s Favourite Wedding Planning Platform</h5>
          <img src="https://images.pexels.com/photos/258421/pexels-photo-258421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full" alt="Couple Image" />
        </div>
        <div className='w-3/6 flex flex-col items-center justify-between'>

          <div className='w-full flex flex-col items-center mt-3'>
            <h1 className='text-black text-3xl font-[600] mt-8'>Sign In/Sign UP</h1>
            <form className='flex flex-col items-center w-5/6' >
              <input className='w-11/12 border h-12 p-2 rounded-md mt-4 text-black' type="text" placeholder='Enter your Name'  />
              <input className='w-11/12 border h-12 p-2 rounded-md mt-4 text-black' type='email' placeholder='Enter your e-mail' />
              <input className='w-11/12 border h-12 p-2 rounded-md mt-4 text-black' type="number" placeholder='Enter your mobile number'  />
              <input className='w-11/12 border h-12 p-2 rounded-md mt-4 text-black' type="text" placeholder='Enter your city'  />
              <div>
                <label className='text-black' htmlFor="Service">Choose a Service:</label>
                <select className='text-black border rounded' name="Service">
                  <option value="example">photography</option>
                  <option value="example2">wedding planner</option>
                </select>
              </div>

              <input className='bg-sky-500 rounded w-4/6 py-2 mt-4' type='submit' ></input>

            </form>
            <h6 className='my-10 text-black w-full text-center'>-------------- OR --------------</h6>
            <p className='text-black font-medium text-2xl'>Continue With</p>
          </div>

          <div className='flex items-center justify-center gap-2 mb-10'>
            <h2 className='text-black '>Are you a vendor?</h2>
            <button className='bg-sky-500 p-2'>Business Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login