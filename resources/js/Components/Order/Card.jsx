import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import ConfirmationModal from '../ConfirmationModal'

export const Card = ({ layanan, assetPath, konfirmasi }) => {
    const src = `${assetPath}/${layanan.thumbnail}` || 'https://picsum.photos/400'
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    return (
        <>
            <div className="card w-full md:w-1/2 md:w-1/3">
                <div className="card-body">
                    <div className="card-detail">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body justify-evenly w-7/8">
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='text-xl uppercase font-bold'>{layanan.nama_layanan}</div>
                                        <div className='text-md text-slate-400 uppercase font-bold'>{layanan.kategori}</div>
                                        <div className='text-md text-slate-400 font-bold'>Rp. {layanan.harga}</div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-24 md:w-48 rounded">
                                            <img src={src} />
                                        </div>
                                    </div>
                                </div>
                                {!konfirmasi &&
                                    <div className="card-actions w-full justify-center">
                                        <Link href={route('order.show', layanan.id)} className="w-full btn btn-outline btn-primary">Order Layanan</Link>
                                    </div>
                                }
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
