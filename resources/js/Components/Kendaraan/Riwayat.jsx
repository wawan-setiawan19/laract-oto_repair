import React from 'react'

export const Riwayat = ({transaksi}) => {
    return (

        <div>
            <div>
                <h2 className="card-title text-lg mx-auto">03-03-2023</h2>
                <table className='table'>
                    <tr>
                        <td>Tipe Servis</td>
                        <td>{transaksi.kategori}</td>
                    </tr>
                    <tr>
                        <td>Jenis Kerusakan</td>
                        <td>Ringan</td>
                    </tr>
                    <tr>
                        <td>Ganti Sparepart</td>
                        <td>Tidak</td>
                    </tr>
                    <tr>
                        <td>Total Tagihan</td>
                        <td>Rp. 50.000</td>
                    </tr>
                    <tr>
                        <td>Catatan</td>
                        <td>Lakukan servis kembali setelah 2 bulan atau 2000Km</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
