import { Detail } from '@/Components/Kendaraan/Detail'
import { Riwayat } from '@/Components/Kendaraan/Riwayat'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const DetailKendaraan = ({auth}) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title='Detail Kendaraan' />
      <Detail />
    </AuthenticatedLayout>
  )
}

export default DetailKendaraan