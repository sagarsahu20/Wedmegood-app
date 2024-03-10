import React from 'react'
import Image from 'next/image';
import workers from '../assets/workers.png'
import component from '../assets/component.png'
import worker from '../assets/worker.png'
import ceo from '../assets/ceo.png'





function about() {
  return (<><div className=' bg-[#fff] flex justify-between items-baseline mt-6 mx-10'>
    <h1 className='text-3xl'>WedMeGood</h1>
    <div className='flex gap-10 font-sans font-bold text-sm'>
      <h1>ALL PAGES</h1>
      <h1>ABOUT</h1>
      <h1>CONTACT</h1>
    </div>
    <h1 className='font-sans font-bold text-sm'>Call us: +1-305-3095</h1>
  </div>
    <div className='flex justify-between '>
      <div className='flex flex-col gap-6 mt-32 mx-10 min-w-2/6 max-w-2xl'>

        <h1 className='font-bold mb-2 text-sm tracking-widest'>ABOUT US</h1>
        <div className='flex flex-col gap-7 w-fit'>
          <h2 className='text-6xl font-bold mb-3'>WE BUILD QUALITY<br />SOLAR EXPERIENCE.</h2>
          <h3 className='text-2xl '>At Factiva Solar Factory, we believe going solar is one of the smartest investments a homeowner can make in today's world. Since our founding in 2005, we've remained dedicated to empowering households across the region.</h3>
          <p className='text-xl text-slate-700'>Our company is built on a team of NABCEP certified solar experts committed to the highest standards of workmanship. From custom system design and installation to maintenance and repairs, you can count on us to get the job done right. We use only the most efficient solar panels and modern technologies to ensure you maximize energy production and cost savings for decades to come.</p>
        </div>
      </div>

      <div className='flex flex-col gap-9 justify-end'>
        <div className='flex w-fit items-baseline'>
          <div className='w-fit h-fit p-2 pr-3 bg-[#CDEF5C]'>
            <h1 className='text-7xl text-center font-semibold'>19</h1>
          </div>
          <p className='text-xl font-sans font-semibold'>Different kind of products</p>
        </div>
        <div className='flex w-fit ml-6 items-baseline'>
          <div className='w-fit h-fit p-2 pr-3 bg-[#CDEF5C]'>
            <h1 className='text-7xl text-center font-semibold'>287</h1>
          </div>
          <p className='text-xl font-sans font-semibold'>Expert engineers are working</p>
        </div>
        <div className='flex w-fit ml-14 items-baseline'>
          <div className='w-fit h-fit p-2 pr-3 bg-[#CDEF5C]'>
            <h1 className='text-7xl text-center font-semibold'>40M+</h1>
          </div>
          <p className='text-xl font-sans font-semibold'>Export valule in last 10 years</p>
        </div>
      </div>
    </div>
    <div className=' ml-10 mt-20 relative'>
      <div className='flex w-screen '>
        <Image src={workers} alt='workers' className='max-w-[790px] z-10' />
        <Image src={component} alt='bg' className='max-w-[700px] h-[380px] absolute right-12 -top-2' />
      </div>
      <div className='flex'>
        <h1 className='font-sans font-bold text-6xl mt-40'>30+ YEARS OF SERVICE<br />IN THE INDUSTRY.</h1>
        <Image src={worker} alt='bg' className='absolute right-0 top-40 w-[600px]' />

      </div>
    </div>
    <div className='flex justify-between gap-2 mt-64 mx-10'>
      <div className='flex flex-col gap-14  max-w-[700px]'>
        <h1 className='text-6xl font-sans font-bold'>WE STARTED FROM 1992</h1>
        <p className='text-xl'>Beyond consultation, Factiva has pioneered an innovative apprenticeship program allowing new solar trainees to gain experience by assisting lead installers. This unique model helps make solar more affordable without compromising quality workmanship.</p>
        <p>We understand that taking the leap into solar can feel overwhelming, which is why education is core to our mission. Our solar consultants take the time to fully explain the technology, the financial benefits through incentives and long-term savings, and how to get the most value from solar.</p>
      </div>
      <div className='flex flex-col gap-14  max-w-[700px]'>
        <h1 className='text-6xl font-sans font-bold'>OUR MISSION IS T<br />PROVIDE THE BEST SOLAR.</h1>
        <p>From our small-town roots, Factiva Solar Factory has expanded to keep up with growing solar demand but remains a local company focused on community impact. We're committed to protecting the environment while helping our neighbors gain energy independence.</p>
      </div>
    </div>

    <div className='mx-10 mt-64'>
      <div className='flex flex-col gap-8'>
        <h1 className='font-bold mb-2 text-sm tracking-widest'>MEET THE TEAM</h1>
        <p className='text-6xl font-sans font-semibold'>AWESOME PEOPLE ARE<br />WAITING TO HELP.</p>
      </div>
      
      <div className='flex flex-wrap gap-11 mt-32'>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
      <div>
      <Image src={ceo} alt='bg' className='w-96' />
      <h1 className='text-xl font-sans font-semibold mt-2'>Roger Kenter</h1>
      <p className='text-sm mt-2'>Roger Kenter</p>
      </div>
    </div>
    </div>
    <div className='bg-[#cdef5c] py-28 mt-72 overflow-hidden'>
    <div className=' px-10 flex flex-col'>
            <div className='flex justify-between h-[350px]'>
            <h1 className='text-6xl font-medium font-sans w-4/6'>OUR FACTORY & OFFICES<br/>NEAR YOU.</h1>
            <Image src={component} alt='assets' className=' w-100% max-w-[600px] relative -top-52' />

            </div>
            
            <div className='flex gap-56 justify-between max-w-[1670px]'>
                <div className='ml-3 flex flex-col justify-between'>

                    <h1 className='mb-2 font-semibold text-sm tracking-widest text-[#5e6075]'>HEAD OFFICE</h1>
                    <h3 className='text-xl'>contact@factiva.co</h3>
                    <h3 className='text-xl'>+1-349-493-395</h3>
                    <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

                </div>

                <div className='ml-3 flex flex-col gap-6 justify-center '>


                    <h1 className='mb-2 font-semibold text-sm tracking-widest text-[#5e6075]'>FACTORY 01</h1>
                    <h3 className='text-xl'>contact@factiva.co</h3>
                    <h3 className='text-xl'>+1-349-493-395</h3>
                    <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

                </div>

                <div className='ml-3 flex flex-col gap-6 justify-center   '>


                    <h1 className='mb-2 font-semibold text-sm tracking-widest text-[#5e6075]'>FACTORY 02</h1>
                    <h3 className='text-xl'>contact@factiva.co</h3>
                    <h3 className='text-xl'>+1-349-493-395</h3>
                    <h3 className='text-xl'>274 Marinor Street, NY-10007</h3>

                </div>
            </div>
        </div>
        </div>
        <div className='flex justify-between mx-10 mt-24 max-w-[1650px] mb-40'>
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

export default about;