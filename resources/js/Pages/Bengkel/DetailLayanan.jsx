import { Detail } from '@/Components/Layanan/Detail'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const DetailKendaraan = ({auth, assetPath, layanan}) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Detail Kendaraan' />
      <Detail layanan={layanan} assetPath={assetPath}/>
    </AuthenticatedLayout>
  )
}

export default DetailKendaraan