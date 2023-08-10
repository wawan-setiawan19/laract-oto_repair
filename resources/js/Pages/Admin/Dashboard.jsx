import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import VisualisasiData from './VisualisasiData';
const Dashboard = ({ auth, dataLayanan }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title='Dasboard Admin'/>
            <VisualisasiData dataLayanan={dataLayanan}/>
        </AuthenticatedLayout>
    )
}

export default Dashboard