import Add from '@/Components/Kendaraan/Add'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const TambahKendaraan = ({auth}) => {
  return (
    <Authenticated user={auth.user}>
        <Head title='Form Tambah Kendaraan'/>
        <Add className="max-w-xl" user={auth.user}/>
    </Authenticated>
  )
}

export default TambahKendaraan