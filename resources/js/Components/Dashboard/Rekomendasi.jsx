import { Link } from '@inertiajs/react'
import React from 'react'

const Rekomendasi = () => {
    return (
        <div className="h-fit bg-white rounded shadow-xl image-full rounded-none p-5 rounded-b-lg md:px-20">
            <div className="text-md mt-3">Mobil bermasalah?</div>
            <div className="card bg-slate-100 p-5 mt-5">
                    <p>Segera konsultasikan masalah kendaraan anda pada bengkel terdekat di sekitar Anda!</p>
                    <Link href={route('garasi')} className="btn btn-primary mt-2 text-white w-fit">
                        Klik Garasi
                    </Link>
            </div>
        </div>
    )
}

export default Rekomendasi