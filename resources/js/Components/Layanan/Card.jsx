import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import ConfirmationModal from '../ConfirmationModal'

export const Card = ({ layanan, assetPath }) => {
    const src = `${assetPath}/${layanan.thumbnail}` || 'https://picsum.photos/400'
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = (item) => {
        setItemToDelete(item)
        setShowModal(true);
    }

    const confirmDelete = () => {
        router.delete(route('layanan.destroy', itemToDelete.id),{
            onSuccess : () => {
                setShowModal(false)
            }
        })
    }

    return (
        <>
            <div className="card w-full md:w-1/2 md:w-1/3">
                <div className="card-body">
                    <div className="card-detail">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="flex">
                                <Link className="m-3 ml-auto" href={route('layanan.edit', layanan.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </Link>
                                <button onClick={() => handleDelete(layanan)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
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
                                <div className="card-actions w-full justify-center">
                                    <Link href={route('layanan.show', layanan.id)} className="w-full btn btn-outline btn-primary">Lihat Detail</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmationModal isOpen={showModal} onCancel={() => setShowModal(false)} onConfirmation={confirmDelete} data={layanan.nama_layanan}/>
        </>
    )
}
