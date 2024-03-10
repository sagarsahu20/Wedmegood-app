import React from 'react'
import component from '../assets/component.png'
import components from '../assets/component2.png'
import Image from 'next/image'



function contact() {
    return (<>
        <div className=' bg-[#fff] flex justify-between items-baseline mt-6 mx-10'>
            <h1 className='text-3xl'>WedMeGood</h1>
            <div className='flex gap-10 font-sans font-bold text-sm'>
                <h1>ALL PAGES</h1>
                <h1>ABOUT</h1>
                <h1>CONTACT</h1>
            </div>
            <h1 className='font-sans font-bold text-sm'>Call us: +1-305-3095</h1>
        </div>
        <div className='flex flex-col gap-6 mt-32 w-fit mx-10'>
            <h1 className='font-bold mb-2 text-sm tracking-widest'>CONTACT</h1>
            <div className='flex flex-col gap-7 w-fit'>
                <h2 className='text-6xl font-bold'>GET IN TOUCH WITH<br /> OUR EXPERTS.</h2>
                <p className='text-xl text-slate-700'>Ready to discuss how cost-saving solar can work for your home or business?<br /> Reach out to our solar pros online or give us a call. We're here to listen,<br /> inform and personalize solar solutions that deliver results.</p>
            </div>
        </div>
        <div className='flex justify-between pb-40 mx-10 mt-32 '>

            <Image className='relative left-80 -top-20' width={500} height={500} alt='component' src={component} />

            <div className=' flex absolute flex-col border border-black bg-[#f7f6f2] h-fit px-10 py-11 gap-10 w-[50%] max-w-[700px] min-w-[700px]'>
                <input className='p-5 border-2 border-black bg-[#f7f6f2]' name="Your name" type="text" placeholder="Your name" />
                <input className='p-5 border-2 border-black bg-[#f7f6f2]' name="Email address" type="text" placeholder="Email address" />
                <input className='p-5 border-2 border-black bg-[#f7f6f2]' name="Phone" type="number" placeholder="Phone" autoComplete="off" />
                <input className='p-5 border-2 border-black bg-[#f7f6f2]' name="Subject" type="text" placeholder="Subject" autoComplete="off" />
                <textarea className='p-5 border-2 border-black bg-[#f7f6f2]' name="Message" placeholder="Message" autoComplete="off" />
                <button className=' bg-[#cdef5c] px-4 py-5 w-fit font-[600] '>SEND MESSAGE</button>
                <p className='text-slate-500'>Our experts will reply you within 24 hours</p>
            </div>
            <div className='font- ml-3 flex flex-col gap-6 justify-center'>


                <h1 className='font-medium  mb-2'>HEAD OFFICE</h1>
                <h3 className='text-xl'>contact@factiva.co</h3>
                <h3 className='text-xl'>+1-349-493-395</h3>
                <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

            </div>
        </div>
        <div className='bg-[#cdef5c] py-28 mt-72 overflow-hidden'>
        <div className=' px-10 flex flex-col '>
            <div className='flex justify-between'>
            <h1 className='text-6xl font-medium font-sans w-4/6'>OUR FACTORY & OFFICES<br/>NEAR YOU.</h1>
            <Image src={components} alt='assets' className=' w-100% max-w-[600px] relative -top-52' />
            </div>
            
            <div className='flex gap-56 justify-between max-w-[1670px]'>
                <div className='ml-3 flex flex-col justify-between'>

                    <h1 className='font-medium  mb-2'>HEAD OFFICE</h1>
                    <h3 className='text-xl'>contact@factiva.co</h3>
                    <h3 className='text-xl'>+1-349-493-395</h3>
                    <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

                </div>

                <div className='ml-3 flex flex-col gap-6 justify-center '>


                    <h1 className='font-medium  mb-2'>FACTORY 01</h1>
                    <h3 className='text-xl'>contact@factiva.co</h3>
                    <h3 className='text-xl'>+1-349-493-395</h3>
                    <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

                </div>

                <div className='ml-3 flex flex-col gap-6 justify-center   '>


                    <h1 className='font-medium  mb-2'>FACTORY 02</h1>
                    <h3 className='text-xl'>contact@factiva.co</h3>
                    <h3 className='text-xl'>+1-349-493-395</h3>
                    <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

                </div>
            </div>
        </div>
        </div>

        <div className='flex justify-between mx-10 mt-24 max-w-[1650px]'>
        <div className='list-none flex flex-col gap-8'>
            <h1 className='font-semibold text-sm tracking-widest text-[#5e6075]'>COMPANY</h1>
            <li className='font-sans  font-black'>HOME</li>
            <li className='font-sans font-black'>ABOUT US</li>
            <li className='font-sans font-black'>SERVICES</li>
            <li className='font-sans font-black'>CONTACT</li>
        </div>

        <div className='list-none flex flex-col gap-8'>
            <h1 className='font-semibold text-sm tracking-widest text-[#5e6075]'>COMPANY</h1>
            <li className='font-sans font-black'>HOME</li>
            <li className='font-sans font-black'>ABOUT US</li>
            <li className='font-sans font-black'>SERVICES</li>
            <li className='font-sans font-black'>CONTACT</li>
        </div>

        <div className='list-none flex flex-col gap-8'>
            <h1 className='font-semibold text-sm tracking-widest text-[#5e6075]'>COMPANY</h1>
            <li className='font-sans font-black'>HOME</li>
            <li className='font-sans font-black'>ABOUT US</li>
            <li className='font-sans font-black'>SERVICES</li>
            <li className='font-sans font-black'>CONTACT</li>
        </div>

        <div className='list-none flex flex-col gap-8'>
            <h1 className='font-semibold text-sm tracking-widest text-[#5e6075]'>COMPANY</h1>
            <li className='font-sans font-black'>HOME</li>
            <li className='font-sans font-black'>ABOUT US</li>
            <li className='font-sans font-black'>SERVICES</li>
            <li className='font-sans font-black'>CONTACT</li>
        </div>
        </div>
    </>)
}

export default contact