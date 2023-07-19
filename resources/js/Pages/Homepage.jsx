import React from 'react'
import {Head} from '@inertiajs/react'

const Homepage = (props) => {
  return (
    <div className='flex justify-center bg-neutral-500 text-2xl'>
        <Head title={props.title}/>
        <h1>Homepage</h1>
    </div>
  )
}

export default Homepage