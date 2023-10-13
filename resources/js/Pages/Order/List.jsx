import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'

const List = ({ auth, transaksis }) => {
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id: 1,
        status_pembayaran: '',
        _method: 'put'
    });

    const handleSuccess = (e, id) => {
        e.preventDefault();
        alert('pembayaran sukses');
        router.visit(route('transaksi.update', id), {
            method: 'put',
            data: {
                status_pembayaran: 'done'
            },
        })
        // post(route('transaksi.update', id), {
        //     preserveState: true,
        // });
    }
    const handleConfirm = (e, id) => {
        e.preventDefault();
        router.visit(route('transaksi.konfirmasi', id), {
            method: 'put',
        })
    }

    const handlePayment = (e, snapToken, id) => {
        console.log(snapToken);
        window.snap.pay(snapToken, {
            onSuccess: function (result) {
                /* You may add your own implementation here */
                setData('id', id)
                setData('status_pemabayaran', 'done')
                handleSuccess(e, id);
            },
            onPending: function (result) {
                /* You may add your own implementation here */
                alert("wating your payment!"); console.log(result);
            },
            onError: function (result) {
                /* You may add your own implementation here */
                alert("payment failed!"); console.log(result);
            },
            onClose: function () {
                /* You may add your own implementation here */
                alert('you closed the popup without finishing the payment');
            }
        });
    }
    return (
        <Authenticated user={auth.user}>
            <Head title='Transaksi Saya' />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            {auth.user.role !== 'user' && <th>Costumer</th>}
                            <th>Nama Layanan</th>
                            <th>Kategori</th>
                            <th>Tanggal Transaksi</th>
                            {auth.user.role == 'user' &&
                                <>
                                    <th>Metode Pembayaran</th>
                                    <th>Aksi</th>
                                </>
                            }
                            {auth.user.role == 'bengkel' &&
                                <>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {transaksis && transaksis.map((transaksi, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    {auth.user.role !== 'user' && <th>{transaksi.name}</th>}
                                    <td>{transaksi.nama_layanan}</td>
                                    <td>{transaksi.kategori}</td>
                                    <td>{transaksi.tanggal_transaksi}</td>
                                    {auth.user.role == 'user' && <td>{transaksi.metode_pembayaran}</td>}
                                    <td>
                                        {transaksi.status_pembayaran !== 'paid' && transaksi.metode_pembayaran == 'Non-Tunai' &&
                                            <button className="btn btn-primary" onClick={e => handlePayment(e, transaksi.snap_token, transaksi.id)}>Bayar Sekarang</button>
                                        }
                                        {transaksi.status_pembayaran == 'paid' &&
                                            <div className="badge badge-success gap-2">
                                                TERBAYAR
                                            </div>
                                        }
                                        {transaksi.status_pembayaran == 'waiting' &&
                                            <div className="badge badge-warning gap-2">
                                                MENUNGGU
                                            </div>
                                        }
                                    </td>
                                    {auth.user.role == 'bengkel' && transaksi.status_pembayaran == 'waiting' &&
                                        <button className="btn btn-primary" onClick={e => handleConfirm(e, transaksi.id_order)}>Konfirmasi</button>
                                    }
                                    {auth.user.role == 'user' &&
                                        <td>{transaksi.status_pembayaran}</td>
                                    }
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