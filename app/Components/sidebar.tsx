import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { RiAddBoxFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import Searchbar from "./searchbar"
import Link from 'next/link';
import { useSelector } from 'react-redux';

// interface sidebar {
//   title: String
// }

// const sidePanels: sidebar[] = [
//   {
//     title : "Today",
//   },
//   {
//     title : "Calander"
//   },
//   {
//     title : "Sticky Wall",
//   },
// ]




function sidebar() {

  



  return (<div className=''>
    <div className='rounded-xl px-3 w-4/6 transition-all xl:w-[353px] min-w-[270px] max-w-[353px] h-screen bg-[#f4f4f4] '>
      <div className=''>
        <div className='pt-4 flex text-4xl items-baseline justify-between'>
          <h1 className='text-[#444444ff] '>Menu</h1>
          <h2 className='w-fit'><GiHamburgerMenu className='text-[#7c7c7c]' /></h2>
        </div>
        <Searchbar />
      </div>
      <div className='pl-2'>
        <div>
          <h1 className='text-sm font-bold text-[#444]'>TASKS</h1>
        </div>


        <div className='border-b py-3 cursor-pointer flex flex-col gap-1'>
          <Link href={'/today'} className='focus:bg-black focus:text-white' >
          <div className='flex items-center text-2xl  gap-4 rounded-md hover:bg-[#ebebeb]'>
            <FaTasks className='text-[#7c7c7c]' /><h1>Today</h1>
          </div>
          </Link>
          <div className='flex items-center text-2xl gap-4 rounded-md hover:bg-[#ebebeb]'>
            <MdDateRange className='text-[#7c7c7c]' /><h1 className='text-[#7c7c7c]'>Calander</h1>
          </div>
          <Link href={'/stickywall'} className='focus:bg-black focus:text-white' >
          <div className='flex items-center text-2xl gap-4 rounded-md hover:bg-[#ebebeb]'>
            <FaNoteSticky className='text-[#7c7c7c]' /><h1 className='text-[#7c7c7c]'>Sticky Wall</h1>
          </div>
          </Link>
        </div>


        <div className='border-b py-3'>
          <h1 className='text-sm font-bold flex flex-col gap-1 text-[#444]'>LISTS</h1>
          <div className='flex items-center text-2xl gap-4 rounded-md hover:bg-[#ebebeb]'>
            <RiAddBoxFill className='text-[#7c7c7c]' /><h1 className='text-[#7c7c7c]'>Add New List</h1>
          </div>
        </div>


        <div className='flex flex-col gap-1 py-3'>
          <h1 className='text-sm font-bold text-[#444]'>Tags</h1>
        </div>
      </div>

    </div>
  </div>
  )
}

export default sidebar;