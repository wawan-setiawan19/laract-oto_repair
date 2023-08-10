import Konfirmasi from '@/Components/Order/Konfirmasi'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const RingkasanOrder = ({auth, layanan, assetPath}) => {
  return (
    <Authenticated user={auth.user}>
        <Head title='Ringkasan'/>
        <Konfirmasi user={auth.user} layanan={layanan} assetPath={assetPath}/>
    </Authenticated>
  )
}

export default RingkasanOrder