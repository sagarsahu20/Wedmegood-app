import React from 'react'
import Sidebar from '../components/sidebar'
import Todo from '../today/page'


function page() {
  return (<div className='bg-[#fafafa] w-full h-full'>
    <div className=''>
      <div className='w-fit'>
        <Sidebar />
      </div>
      <div className='w'>
        <Todo />
      </div>
    </div>
  </div>

  )
}

export default page