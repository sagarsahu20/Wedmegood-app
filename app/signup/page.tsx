import { motion } from 'framer-motion'
import PNG from '../assets/image.png'
import Image from 'next/image'

function Signup() {
    return (
      <div className="flex justify-center w-screen h-screen gap-5 p-6">
        <div className='relative w-2/4 rounded-2xl bg-[#111111]'>
  
          <span className="">
            <h1 className="pt-8 pl-8 text-5xl font-bold text-left text-white bg-[#111111] line-clamp-2">
              Organic <br />
              Mind
            </h1>
          </span>
  
          <div className="absolute w-[15vw] top-1/3 left-1/3 ">

            <Image src={PNG} alt='png' className="w-full " />
  
          </div>
        </div>
  
        <div className='flex flex-col items-center justify-center w-2/4 border-2 rounded-2xl'>
         
          <div initial={{rotate: '0deg'}} animate={{rotate: '180deg'}} className="flex flex-col items-start w-3/5 gap-4 pb-3 text-left">
            <h1 className="text-5xl font-bold text-left bg-color4 w-rem">Productive Mind</h1>
            <h4 className="text-left line-clamp-3 w-rem">With only the features you need, Organic Mind is customized for individuals seeking a stress-free way to stay focused on their goals, projects, and tasks.</h4>
            <button className="w-full px-40 py-3 font-bold rounded-md bg-[#ffd43b]">Get Started</button>
          </div>
          <a>Already have a account? Sign in</a>
        </div>
      </div>
      
    )
  }
  
  export default Signup