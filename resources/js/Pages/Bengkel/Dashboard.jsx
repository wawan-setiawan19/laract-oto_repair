import BarChartComponent from '@/Components/Chart/BarChartComponent'
import PieChartComponent from '@/Components/Chart/PieChartComponent'
import { Link, router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react'

const Dashboard = ({ auth, dataLayanan, bengkels }) => {
    const label = dataLayanan.map(data => data.kategori)
    const value = dataLayanan.map(data => data.count)

    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}>
            <div className="card-actions w-full justify-center align-bottom">
                    <a href={route('bengkel.export')} target="_blank">Cetak Pdf</a>
                </div>
            <div className="flex flex-wrap">
                <div className="card w-full md:w-1/2 lg:w-1/3">
                    <h2 className="card-title text-2xl w-2/3">Layanan yang dimiliki</h2>
                    <PieChartComponent label={label} value={value} title="Layanan yang dimiliki" />
                </div>
                <div className="card w-full md:w-1/2 lg:w-1/3">
                    <h2 className="card-title text-2xl w-2/3">Layanan yang dimiliki</h2>
                    <BarChartComponent label={label} value={value} data={dataLayanan} title="Layanan yang dimiliki" />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Dashboard