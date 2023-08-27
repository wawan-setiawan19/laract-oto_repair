import { Transition } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import DateInput from '../DateInput'
import FileInput from '../FileInput'
import InputError from '../InputError'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import SelectInput from '../SelectInput'
import TextInput from '../TextInput'
import { Card } from './Card'

const Konfirmasi = ({ className, user, layanan, assetPath }) => {
    const date = new Date()
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1
    const currentDate = `${date.getFullYear()}-${month}-${date.getDate()}`
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id_bengkel: layanan[0].id_bengkel,
        id_user: user.id,
        id_layanan: layanan[0].id,
        kategori: layanan[0].kategori,
        nama_layanan: layanan[0].nama_layanan,
        metode_pembayaran: 'Tunai',
        status_pembayaran: 'done',
        harga: layanan[0].harga,
        tanggal_transaksi: currentDate,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('order.store'));
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Konfirmasi Layanan</h2>
            </header>

            <Card assetPath={assetPath} layanan={layanan[0]} konfirmasi={true}/>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='hidden'>
                    <InputLabel htmlFor="id_bengkel" value="Id Bengkel" />

                    <TextInput
                        id="id_bengkel"
                        className="mt-1 block w-full"
                        onChange={(e) => setData('id_bengkel', e.target.value)}
                        required
                        isFocused
                        disabled
                    />

                    <InputError className="mt-2" message={errors.id_bengkel} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="id_layanan" value="Id Bengkel" />

                    <TextInput
                        id="id_layanan"
                        className="mt-1 block w-full"
                        onChange={(e) => setData('id_layanan', e.target.value)}
                        required
                        isFocused
                        disabled
                    />

                    <InputError className="mt-2" message={errors.id_layanan} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="harga" value="Harga" />

                    <TextInput
                        id="harga"
                        className="mt-1 block w-full"
                        onChange={(e) => setData('harga', e.target.value)}
                        required
                        isFocused
                        disabled
                    />

                    <InputError className="mt-2" message={errors.harga} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="tanggal_transaksi" value="Tanggal Lahir" />

                    <DateInput
                        id="tanggal_transaksi"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.tanggal_transaksi}
                        onChange={(e) => setData('tanggal_transaksi', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.tanggal_transaksi} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="id_user" value="ID User" />

                    <TextInput
                        id="id_user"
                        className="mt-1 block w-full"
                        value={data.id_user}
                        onChange={(e) => setData('id_user', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.id_user} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="status_pembayaran" value="ID User" />

                    <TextInput
                        id="status_pembayaran"
                        className="mt-1 block w-full"
                        value={data.status_pembayaran}
                        onChange={(e) => setData('status_pembayaran', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.status_pembayaran} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="kategori" value="Kategori" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="kategori"
                        errors={errors.kategori}
                        value={data.kategori}
                        onChange={e => setData('kategori', e.target.value)}>
                        <option value="Oli">Oli</option>
                        <option value="Rem">Rem</option>
                        <option value="Berkala">Berkala</option>
                        <option value="Ban">Ban</option>
                        <option value="Tune Up">Tune Up</option>
                    </SelectInput>

                    <InputError className="mt-2" message={errors.kategori} />
                </div>
                <div className=''>
                    <InputLabel htmlFor="metode_pembayaran" value="Metode Pembayaran" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="metode_pembayaran"
                        errors={errors.metode_pembayaran}
                        value={data.metode_pembayaran}
                        onChange={(e) => setData('metode_pembayaran', e.target.value)}
                    >
                        <option value="Non-Tunai">Non-Tunai</option>
                        <option value="Tunai">Tunai</option>
                    </SelectInput>

                    <InputError className="mt-2" message={errors.metode_pembayaran} />
                </div>
                <div className='hidden'>
                    <InputLabel htmlFor="nama_layanan" value="nama_layanan" />

                    <TextInput
                        id="nama_layanan"
                        className="mt-1 block w-full"
                        value={data.nama_layanan}
                        onChange={(e) => setData('nama_layanan', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.nama_layanan} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Bayar Sekarang</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    )
}

export default Konfirmasi