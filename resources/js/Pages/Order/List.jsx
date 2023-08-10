import Konfirmasi from '@/Components/Order/Konfirmasi'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const List = ({ auth, transaksis }) => {
    console.log(transaksis);
    return (
        <Authenticated user={auth.user}>
            <Head title='Transaksi Saya' />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nama Layanan</th>
                            <th>Kategori</th>
                            <th>Tanggal Transaksi</th>
                            <th>Metode Pembayaran</th>
                            <th>Status Pembayaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaksis && transaksis.map((transaksi, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{transaksi.nama_layanan}</td>
                                    <td>{transaksi.kategori}</td>
                                    <td>{transaksi.tanggal_transaksi}</td>
                                    <td>{transaksi.metode_pembayaran}</td>
                                    <td className={transaksi.status_pembayaran !== 'success'?'badge-warning':'badge-success'}>{transaksi.status_pembayaran}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Authenticated>
    )
}

export default List