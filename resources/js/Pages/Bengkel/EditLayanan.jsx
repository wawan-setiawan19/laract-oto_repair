import Edit from '@/Components/Layanan/Edit'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'


const EditLayanan = ({auth, layanan, assetPath}) => {
  return (
    <Authenticated user={auth.user}>
        <Head title='Form Tambah Kendaraan'/>
        <Edit className="max-w-xl w-full md:w-1/2" user={auth.user} layanan={layanan} assetPath={assetPath}/>
    </Authenticated>
  )
}

export default EditLayanan