'use client'
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { RiAddBoxFill } from 'react-icons/ri';

function Component() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    return (<>
        <div className='text-[#444444ff] font-[400]' onClick={toggleModal} >
            <div className='flex gap-3 items-center text-2xl border rounded text-[#7c7c7c] px-3 py-4 transition-all hover:text-black cursor-cell hover:border-black'>

                <RiAddBoxFill /><h1>Add New Task</h1>
            </div>
        </div>



        <div>


            {isOpen && (
                <div
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-[#ffffff] rounded-lg shadow ">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:">
                                    Create New Task
                                </h3>
                                <button
                                    onClick={toggleModal}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>

                                </button>
                            </div>
                            {/* Modal body */}
                            <form className="p-4 md:p-5">
                                <label  >Todo</label>
                                <input type='text' className='focus:border-primary-600 bg-[#f9fafb] w-[95%] px-[5%] py-[8px] rounded-md font-sans font-normal border' placeholder='Task name' />
                                <label >Task</label>
                                <textarea placeholder='Write Task Description here' name='paragraph' className='focus:ring-blue-500 bg-[#f9fafb] w-[95%] px-[5%] py-[8px] rounded-md font-sans font-normal border' />
                                <button className="mt-2 flex items-center gap-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button" >
                                    <CiCirclePlus className='text-lg' />    Add task
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>

    </>)
}

export default Component