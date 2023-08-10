import Edit from '@/Components/Layanan/Edit'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'


const EditLayanan = ({auth, layanan}) => {
  return (
    <Authenticated user={auth.user}>
        <Head title='Form Tambah Kendaraan'/>
        <Edit className="max-w-xl" user={auth.user} layanan={layanan}/>
    </Authenticated>
  )
}

export default EditLayanan