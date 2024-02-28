import React from 'react'

function header() {

  interface twitterHeaderButton {
    title: String,
  }
  
  const headbarMenuItems: twitterHeaderButton[] = [
    {
      title : "Venues",
    },
    {
      title : "Vendors",
    },
    {
      title : "Photos",
    },
    {
      title : "Real Weddings",
    },
    {
      title : "Blog",
    },
    {
      title : "Shop",
    },
    {
      title : "E-invites",
    }
  ]






  return (
    <div className='border border-red-500 bg-[#e72e77]'>
      <div className='flex  items-center justify-between mx-5 h-[55px]'>
        <div className='flex items-center gap-12'>
        <h1 className='text-3xl'>WedMeGood</h1>
        <ul className='flex gap-6 text-base mr-8 cursor-pointer '>
        {headbarMenuItems.map(items => <li className='hover:bg-[#b4245d]'>{items.title}</li>)}
        </ul>
        </div>
        <button className='px-10 py-1 bg-[#b4245d] rounded-2xl'>Login</button>
      </div>
    </div>
  )
}

export default header