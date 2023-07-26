import { Transition } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import InputError from '../InputError'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import TextInput from '../TextInput'

const Add = ({ className }) => {
    const user = usePage().props.auth.user
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id_pemilik: user.id,
        merk: '',
        tipe: '',
        tahun: '',
        bahan_bakar: '',
        transmisi: '',
        nopol: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('tambah-kendaraan'));
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Tambah Kendaraan</h2>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id_pemilik" value="Id Pemilik" />

                    <TextInput
                        id="id_pemilik"
                        className="mt-1 block w-full"
                        value={data.id_pemilik}
                        onChange={(e) => setData('id_pemilik', e.target.value)}
                        required
                        isFocused
                        disabled
                    />

                    <InputError className="mt-2" message={errors.id_pemilik} />
                </div>
                <div>
                    <InputLabel htmlFor="merk" value="Merk" />

                    <TextInput
                        id="merk"
                        className="mt-1 block w-full"
                        value={data.merk}
                        onChange={(e) => setData('merk', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.merk} />
                </div>
                <div>
                    <InputLabel htmlFor="tipe" value="Tipe" />

                    <TextInput
                        id="tipe"
                        className="mt-1 block w-full"
                        value={data.tipe}
                        onChange={(e) => setData('tipe', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.tipe} />
                </div>
                <div>
                    <InputLabel htmlFor="tahun" value="Tahun" />

                    <TextInput
                        id="tahun"
                        className="mt-1 block w-full"
                        value={data.tahun}
                        onChange={(e) => setData('tahun', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.tahun} />
                </div>
                <div>
                    <InputLabel htmlFor="bahan_bakar" value="Bahan Bakar" />

                    <TextInput
                        id="bahan_bakar"
                        className="mt-1 block w-full"
                        value={data.bahan_bakar}
                        onChange={(e) => setData('bahan_bakar', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.bahan_bakar} />
                </div>
                <div>
                    <InputLabel htmlFor="transmisi" value="Transmisi" />

                    <TextInput
                        id="transmisi"
                        className="mt-1 block w-full"
                        value={data.transmisi}
                        onChange={(e) => setData('transmisi', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.transmisi} />
                </div>
                <div>
                    <InputLabel htmlFor="nopol" value="No Polisi" />

                    <TextInput
                        id="nopol"
                        className="mt-1 block w-full"
                        value={data.nopol}
                        onChange={(e) => setData('nopol', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.nopol} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

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

export default Add