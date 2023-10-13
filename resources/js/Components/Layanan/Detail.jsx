import React from 'react'

export const Detail = ({ assetPath, layanan }) => {
    const dataLayanan = layanan[0]
    const src = `${assetPath}/${dataLayanan.thumbnail}` || 'https://picsum.photos/400'
    return (
        <div className="card w-full m-0">
            <div className="card-body py-3">
                <div className="flex justify-between">
                    <h2 className="card-title text-3xl mx-auto">Detail layanan</h2>
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
                                    <span className='text-gray-500 dark:text-gray-300'>Rp. </span>
                                    <span className='text-3xl font-bold'>{dataLayanan.harga}</span>
                                </div>
                                <div>
                                    <div className='text-xl uppercase font-bold'>{dataLayanan.nama_layanan}</div>
                                    <div className='text-md text-slate-400 uppercase font-bold'>{dataLayanan.kategori}</div>
                                </div>
                                <div>
                                    <h2 className="card-title text-lg mx-auto my-2">Deskripsi layanan</h2>
                                    <div dangerouslySetInnerHTML={{ __html: dataLayanan.description }} className='my-5'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
