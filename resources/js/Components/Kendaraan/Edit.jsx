import { Transition } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import FileInput from '../FileInput'
import InputError from '../InputError'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import SelectInput from '../SelectInput'
import TextInput from '../TextInput'

const Edit = ({ className, user, mobil }) => {
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id_pemilik: user.id,
        merk: mobil.merk,
        tipe: mobil.tipe,
        tahun: mobil.tahun,
        bahan_bakar: mobil.bahan_bakar,
        transmisi: mobil.transmisi,
        nopol: mobil.nopol,
        picture: '',
        _method: 'put'
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('kendaraan.update', mobil.id),{
            preserveState: true,
        });
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
                        defaultValue={data.id_pemilik}
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
                        defaultValue={data.merk}
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
                        defaultValue={data.tipe}
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
                        defaultValue={data.tahun}
                        onChange={(e) => setData('tahun', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.tahun} />
                </div>
                <div>
                    <InputLabel htmlFor="bahan_bakar" value="Bahan Bakar" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="bahan_bakar"
                        errors={errors.bahan_bakar}
                        value={data.bahan_bakar}
                        defaultValue={data.bahan_bakar}
                        onChange={e => setData('bahan_bakar', e.target.value)}>
                        <option value="Bensin">Bensin</option>
                        <option value="Diesel">Diesel</option>
                    </SelectInput>

                    <InputError className="mt-2" message={errors.bahan_bakar} />
                </div>
                <div>
                    <InputLabel htmlFor="transmisi" value="Transmisi" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="transmisi"
                        errors={errors.transmisi}
                        value={data.transmisi}
                        defaultValue={data.transmisi}
                        onChange={e => setData('transmisi', e.target.value)}>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                    </SelectInput>

                    <InputError className="mt-2" message={errors.transmisi} />
                </div>
                <div>
                    <InputLabel htmlFor="nopol" value="No Polisi" />

                    <TextInput
                        id="nopol"
                        className="mt-1 block w-full"
                        value={data.nopol}
                        defaultValue={data.nopol}
                        onChange={(e) => setData('nopol', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.nopol} />
                </div>
                <div>
                    <InputLabel htmlFor="picture" value="Gambar Mobil" />

                    <FileInput
                        className="mt-1 block w-full"
                        name="picture"
                        accept="image/*"
                        errors={errors.picture}
                        value={data.picture}
                        defaultValue={data.picture}
                        onChange={picture => setData('picture', picture)}
                    />

                    <InputError className="mt-2" message={errors.picture} />
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

export default Edit