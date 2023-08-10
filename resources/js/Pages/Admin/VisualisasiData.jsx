import BarChartComponent from '@/Components/Chart/BarChartComponent'
import LineChartComponent from '@/Components/Chart/LineChartComponent'
import PieChartComponent from '@/Components/Chart/PieChartComponent'
import React from 'react'

const VisualisasiData = ({ dataLayanan }) => {
    const label = dataLayanan.map(data => data.kategori)
    const value = dataLayanan.map(data => data.count)
    let total = 0;
    dataLayanan.map(data => total += data.count);
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-md md-3">
                <div className="card-body">
                    <h2 className="card-title">Total Layanan Kami</h2>
                    <p>{total}</p>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="card w-full md:w-1/2 lg:w-1/3">
                    <h2 className="card-title text-2xl w-2/3">Persentase Layanan</h2>
                    <PieChartComponent label={label} value={value} title="Layanan" />
                </div>
                <div className="card w-full md:w-1/2 lg:w-1/3">
                    <h2 className="card-title text-2xl w-2/3">Jumlah Layanan</h2>
                    <BarChartComponent label={label} value={value} data={dataLayanan} title="Layanan" />
                </div>
                <div className="card w-full md:w-1/2 lg:w-1/3">
                    <h2 className="card-title text-2xl w-2/3">Jumlah Layanan</h2>
                    <LineChartComponent label={label} value={value} data={dataLayanan} title="Layanan" />
                </div>
            </div>
        </>
    )
}

export default VisualisasiData