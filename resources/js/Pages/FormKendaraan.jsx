import { Card } from '@/Components/Kendaraan/Card'
import NavBar from '@/Components/NavBar'
import { Head } from '@inertiajs/react'
import React from 'react'

const FormKendaraan = (props) => {
  return (
    <>
    <Head title={props.title}/>
    <NavBar/>
    <Card/>
    </>
  )
}

export default FormKendaraan