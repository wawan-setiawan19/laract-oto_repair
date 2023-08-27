import { Link } from '@inertiajs/react'
import React from 'react'
import { Riwayat } from './Riwayat'

export const Detail = ({assetPath, mobil}) => {
    const dataMobil = mobil[0]
    const src = `${assetPath}/${dataMobil.picture}` || 'https://picsum.photos/400'
    return (
        <div className="card w-full m-0">
            <div className="card-body py-3">
                <div className="flex justify-between">
                    <h2 className="card-title text-3xl mx-auto">Detail Mobil</h2>
                </div>
                <div className="card-detail">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body justify-evenly w-7/8">
                            <div>
                                <div className="avatar flex justify-center">
                                    <div className="w-24 md:w-48 rounded">
                                        <img src={src} />
                                    </div>
                                </div>
                                <div>
                                    <div className='text-xl uppercase font-bold'>{dataMobil.merk}</div>
                                    <div className='text-md text-slate-400 uppercase font-bold'>{dataMobil.tipe}</div>
                                </div>
                                <div>
                                    <h2 className="card-title text-lg mx-auto">Deskripsi Mobil</h2>
                                    <table className='table'>
                                        <tr>
                                            <td>Tahun</td>
                                            <td>{dataMobil.tahun}</td>
                                        </tr>
                                        <tr>
                                            <td>Bahan Bakar</td>
                                            <td>{dataMobil.bahan_bakar}</td>
                                        </tr>
                                        <tr>
                                            <td>Transmisi</td>
                                            <td>{dataMobil.transmisi}</td>
                                        </tr>
                                        <tr>
                                            <td>No. Pol</td>
                                            <td>{dataMobil.nopol}</td>
                                        </tr>
                                    </table>
                                </div>
                                {/* <div>
                                    <div className='text-xl uppercase font-bold'>Riwayat Servis</div>
                                    <Riwayat/>
                                    <Riwayat/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
