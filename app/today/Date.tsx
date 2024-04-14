'use client'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setDate } from '../redux/dateReducer';


function NewDate() {

    function getDate() {

        const dispatch = useDispatch()

        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        dispatch(setDate(date));
        return `
          ${date}`;
    }

    const date = getDate();


    const dispatch = useDispatch();

    function addTodo() {
        dispatch(setDate(date));

    }


    return (
        <>
            <div className='text-5xl flex items-center gap-4'>
                <h1>Today</h1>
                <div className='shadow-[#00000014] border px-1 py-2 rounded-md'>
                    <h1 className='text-4xl'>{date}</h1>
                </div>
            </div>
        </>
    )
}

export default NewDate