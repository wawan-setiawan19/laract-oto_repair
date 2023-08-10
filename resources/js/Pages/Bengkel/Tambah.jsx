import Add from '@/Components/Layanan/Add'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const TambahKendaraan = ({auth, bengkels}) => {
  return (
    <Authenticated user={auth.user}>
        <Head title='Form Tambah Layanan'/>
        <Add className="max-w-xl" user={auth.user} bengkels={bengkels}/>
    </Authenticated>
  )
}

export default TambahKendaraan