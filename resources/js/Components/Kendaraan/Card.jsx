import { Link } from '@inertiajs/react'
import React from 'react'

export const Card = ({mobil, assetPath}) => {
    const src = mobil.picture || 'https://picsum.photos/400'
    return (
        <div className="card w-full">
            <div className="card-body">
                <div className="card-detail">
                    <div className="card bg-base-100 shadow-xl">
                    <Link className="m-3 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </Link>
                        <div className="card-body justify-evenly w-7/8">
                            <div className='flex justify-between'>
                                <div>
                                    <div className='text-xl uppercase font-bold'>{mobil.merk}</div>
                                    <div className='text-md text-slate-400 uppercase font-bold'>{mobil.tipe}</div>
                                    <div className='text-md text-slate-400 font-bold'>{mobil.tahun}-{mobil.transmisi}</div>
                                </div>
                                <div className="avatar">
                                    <div className="w-24 md:w-48 rounded">
                                        <img src={`${assetPath}/${src}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-actions w-full justify-center">
                                <Link href={route('kendaraan.detail')} className="w-full btn btn-outline btn-primary">Lihat Detail</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}
