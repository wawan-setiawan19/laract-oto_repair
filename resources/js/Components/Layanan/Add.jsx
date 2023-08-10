import { Transition } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import FileInput from '../FileInput'
import InputError from '../InputError'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import SelectInput from '../SelectInput'
import TextInput from '../TextInput'

const Add = ({ className, bengkels }) => {
    const user = usePage().props.auth.user
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id_bengkel: user.id,
        nama_layanan: '',
        kategori: 'Oli',
        harga: '',
        thumbnail: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('layanan.store'));
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Tambah Layanan</h2>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id_bengkel" value="Id Bengkel" />
                    {user.role=='admin' && <SelectInput
                        className="mt-1 block w-full"
                        name="kategori"
                        errors={errors.kategori}
                        value={data.kategori}
                        onChange={e => setData('kategori', e.target.value)}>
                        {bengkels && bengkels.map(bengkel => (
                            <option key={bengkel.id} value={bengkel.id}>{bengkel.name}</option>
                        ))}
                    </SelectInput>}
                    {user.role!=='admin' && <TextInput
                        id="id_bengkel"
                        className="mt-1 block w-full"
                        value={data.id_bengkel}
                        onChange={(e) => setData('id_bengkel', e.target.value)}
                        required
                        isFocused
                        disabled
                    />}

                    <InputError className="mt-2" message={errors.id_bengkel} />
                </div>
                <div>
                    <InputLabel htmlFor="nama_layanan" value="Nama Layanan" />

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
                <div>
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
                <div>
                    <InputLabel htmlFor="harga" value="Harga" />

                    <TextInput
                        id="harga"
                        className="mt-1 block w-full"
                        value={data.harga}
                        onChange={(e) => setData('harga', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.harga} />
                </div>
                <div>
                    <InputLabel htmlFor="thumbnail" value="Thumbnail" />

                    <FileInput
                        className="mt-1 block w-full"
                        name="thumbnail"
                        accept="image/*"
                        errors={errors.thumbnail}
                        value={data.thumbnail}
                        onChange={thumbnail => setData('thumbnail', thumbnail)}
                    />

                    <InputError className="mt-2" message={errors.thumbnail} />
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