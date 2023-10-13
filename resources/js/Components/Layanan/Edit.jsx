import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Transition } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'
import FileInput from '../FileInput'
import InputError from '../InputError'
import InputLabel from '../InputLabel'
import PrimaryButton from '../PrimaryButton'
import SelectInput from '../SelectInput'
import TextAreaInput from '../TextAreaInput'
import TextInput from '../TextInput'

const Edit = ({ className, user, layanan, assetPath }) => {
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id_bengkel: user.id,
        nama_layanan: layanan.nama_layanan,
        kategori: layanan.kategori.toLowerCase(),
        harga: layanan.harga,
        description: layanan.description,
        thumbnail: layanan.thumbnail,
        _method: 'put'
    });
    const src = `${assetPath}/${data.thumbnail}` || 'https://picsum.photos/400'

    const submit = (e) => {
        e.preventDefault();
        post(route('layanan.update', layanan.id), {
            preserveState: true,
        });
    };
    return (
        <div className='flex flex-wrap gap-4'>
            <section className={className}>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">Edit Layanan</h2>
                </header>

                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="id_bengkel" value="Id Bengkel" />

                        <TextInput
                            id="id_bengkel"
                            className="mt-1 block w-full"
                            value={data.id_bengkel}
                            onChange={(e) => setData('id_bengkel', e.target.value)}
                            required
                            isFocused
                            disabled
                        />

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
                            <option value="oli">Oli</option>
                            <option value="rem">Rem</option>
                            <option value="berkala">Berkala</option>
                            <option value="ban">Ban</option>
                            <option value="tune up">Tune Up</option>
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
                        <InputLabel htmlFor="description" value="Deskripsi" />

                        {/* <TextAreaInput
                            id="description"
                            className="mt-1 block w-full"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            isFocused
                        /> */}
                        <CKEditor
                            editor={ClassicEditor}
                            id="description"
                            className="mt-1 block w-full h-24"
                            data={data.description}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setData('description', data)
                            }}
                            required
                            isFocused
                        />

                        <InputError className="mt-2" message={errors.description} />
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
            <section className={className}>
                <header className='ml-5'>
                    <h2 className="text-lg font-medium text-gray-900">Thumbnail Lama</h2>
                </header>
                <div className="avatar flex justify-center py-10">
                    <div className="w-48 md:w-72 rounded">
                        <img src={src} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Edit