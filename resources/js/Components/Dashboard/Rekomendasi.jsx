import { Link } from '@inertiajs/react'
import React from 'react'

const Rekomendasi = ({role}) => {
    let btnText = 'Klik Garasi'
    let ruteBtn = 'garasi'
    let headerText = 'Mobil Bermasalah?'
    let messageText = 'Segera konsultasikan masalah kendaraan anda pada bengkel terdekat di sekitar Anda!'
    if(role == 'bengkel'){
        btnText= 'Klik Layanan'
        ruteBtn= 'bengkel.layanan'
        headerText = 'Belum ada layanan?'
        messageText = 'Segera tambahkan menu layanan terbaru untuk bengkel Anda!'
    }
    return (
        <div className="h-fit bg-white rounded shadow-xl image-full rounded-none p-5 rounded-b-lg md:px-20">
            <div className="text-md mt-3">{headerText}</div>
            <div className="card bg-slate-100 p-5 mt-5">
                    <p>{messageText}</p>
                    <Link href={route(`${ruteBtn}`)} className="btn btn-primary mt-2 text-white w-fit">
                        {btnText}
                    </Link>
            </div>
        </div>
    )
}

export default Rekomendasi