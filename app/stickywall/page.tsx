import React from 'react'
import { RiAddBoxFill } from "react-icons/ri";

function page() {
    return (
        <div className='flex flex-col gap-10 transition-all h-full'>
            <div className='text-5xl flex items-center gap-4'>
                <h1>Sticky Wall</h1>
            </div >
            <div className='border grow rounded-xl p-6 flex flex-wrap gap-4 justify-start content-start'>
                <div className='border rounded-xl flex flex-col gap-2 pt-5 w-[32%] h-[40%] bg-purple-300 px-6' >

                    <h1 className='text-2xl'>Social Media</h1>
                    <div>
                    <p>- voluptate quia rem! Sed magnam quam amet.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    </div>
                </div>
                <div className='border rounded-xl flex flex-col gap-2 pt-5 w-[32%] h-[40%] bg-purple-300 px-6' >

                    <h1 className='text-2xl'>Social Media</h1>
                    <div>
                    <p>- voluptate quia rem! Sed magnam quam amet.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    </div>
                </div>
                <div className='border rounded-xl flex flex-col gap-2 pt-5 w-[32%] h-[40%] bg-purple-300 px-6' >

                    <h1 className='text-2xl'>Social Media</h1>
                    <div>
                    <p>- voluptate quia rem! Sed magnam quam amet.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    </div>
                </div>
                <div className='border rounded-xl flex flex-col gap-2 pt-5 w-[32%] h-[40%] bg-purple-300 px-6' >

                    <h1 className='text-2xl'>Social Media</h1>
                    <div>
                    <p>- voluptate quia rem! Sed magnam quam amet.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    <p>- Lorem ipsum dolor sit, amet consectetur.</p>
                    </div>
                </div>
                <div className='border rounded-xl flex items-center justify-center w-[32%] h-[40%] bg-gray-300' >
                <RiAddBoxFill className='text-[#7c7c7c] text-8xl' />
                </div>
            </div>
        </ div >
    )
}

export default page;