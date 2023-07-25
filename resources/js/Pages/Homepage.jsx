import React from 'react'
import {Head} from '@inertiajs/react'
import NavBar from '@/Components/NavBar'
import Hero from '@/Components/Homepage/Hero'

const Homepage = (props) => {
  return (
    <>
    <Head title={props.title}/>
    <Hero/>
    </>
  )
}

export default Homepage