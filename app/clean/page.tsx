import React from 'react'
import Sidebar from '../components/sidebar'
import Todo from '../today/page'

function page() {
  return (
    <div className='mx-5 mt-5 flex gap-5 transition-all 2xl:mx-56'>
        <div>
          <Sidebar/>
          </div>
          <div className='grow'>
            <Todo />
        </div>
    </div>
  )
}

export default page