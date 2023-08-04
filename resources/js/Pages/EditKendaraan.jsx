import Edit from '@/Components/Kendaraan/Edit'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'


const EditKendaraan = ({auth, mobil}) => {
  return (
    <Authenticated user={auth.user}>
        <Head title='Form Tambah Kendaraan'/>
        <Edit className="max-w-xl" user={auth.user} mobil={mobil}/>
    </Authenticated>
  )
}

export default EditKendaraan