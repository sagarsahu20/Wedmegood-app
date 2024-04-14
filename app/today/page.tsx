import React, { use, useState } from 'react'
import Component from './Component';
import NewDate from './Date';






function page() {

  return (<>
    <div className='flex flex-col gap-10 transition-all'>
      <NewDate />

      <Component />
    </div>
  </>)
}


export default page