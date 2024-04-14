import { useState } from "react"
import Image from "next/image"
import PNG from '../assets/image.png'
import Link from "next/link"

function Signin() {


    return (
        <div className="flex  justify-center w-screen h-screen gap-5 p-6">
            <div className='relative w-2/4 rounded-2xl bg-[#111111]'>

                <span className="">
                    <h1 className="pt-8 pl-8 text-5xl font-bold text-left text-white bg-[#111111]2 line-clamp-2">
                        Organic <br />
                        Mind
                    </h1>
                </span>

                <div className="absolute w-[15vw] top-1/3 left-1/3 ">

                    <Image src={PNG} alt="png" className="w-full " />

                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-2/4 border-2 rounded-2xl'>

                <div className="flex flex-col gap-4 pb-3 w-96w-3/5">
                    <h1 className="text-5xl font-bold text-left bg-color4 ">Signin</h1>
                    <form className="flex flex-col gap-3">
                        
                        <input type="text" placeholder="xyz@gmail.com" required className="px-2 py-2 text-left border-2 rounded-md w-rem " />

                        <input type="password" placeholder="Enter password" required className="px-2 py-2 text-left border-2 rounded-md w-rem" />

                    </form>

                    <button className="py-3 font-bold rounded-md px-44 bg-[#ffd43b] ">Signin</button>

                </div>
                <Link href={'/signin'} className="cursor-pointer">Don't have a account? Sign in</Link>
            </div>
        </div>
    )
}

export default Signin