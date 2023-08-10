import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import DateInput from '@/Components/DateInput';
import TextAreaInput from '@/Components/TextAreaInput';
import SelectInput from '@/Components/SelectInput';
import { useEffect, useState } from 'react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, put, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        jenis_kelamin: user.jenis_kelamin || '',
        provinsi: user.provinsi || '',
        kota: user.kota || '',
        kecamatan: user.kecamatan || '',
        alamat: user.alamat || '',
        tanggal_lahir: user.tanggal_lahir || '',
    });

    const [provinces, setProvinces] = useState('');
    const [districts, setDistricts] = useState('');
    const [subDistricts, setSubDistricts] = useState('');

    useEffect(() => {
        fetchProvinces()
    }, [])

    useEffect(() => {
        fetchDistricts(data.provinsi)
    }, [data.provinsi])

    useEffect(() => {
        fetchSubDistricts(data.kota)
    }, [data.kota])

    const fetchProvinces = async () => {
        try {
            const response = await axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi'); // Replace with the actual API endpoint URL
            const data = response.data.provinsi
            const sortData = data.sort((a, b) => a.nama.localeCompare(b.nama))
            setProvinces(sortData);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    const fetchDistricts = async (id) => {
        try {
            const response = await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`); // Replace with the actual API endpoint URL
            const data = response.data.kota_kabupaten
            const sortData = data.sort((a, b) => a.nama.localeCompare(b.nama))
            setDistricts(sortData);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    }

    const fetchSubDistricts = async (id) => {
        try {
            const response = await axios.get(`http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`); // Replace with the actual API endpoint URL
            const data = response.data.kecamatan
            const sortData = data.sort((a, b) => a.nama.localeCompare(b.nama))
            setSubDistricts(sortData);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    }

    const submit = (e) => {
        e.preventDefault();

        put(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="jenis_kelamin" value="Jenis Kelamin" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="jenis_kelamin"
                        errors={errors.jenis_kelamin}
                        value={data.jenis_kelamin}
                        onChange={e => setData('jenis_kelamin', e.target.value)}>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </SelectInput>

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="tanggal_lahir" value="Tanggal Lahir" />

                    <DateInput
                        id="tanggal_lahir"
                        type="date"
                        className="mt-1 block w-full"
                        value={data.tanggal_lahir}
                        onChange={(e) => setData('tanggal_lahir', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.tanggal_lahir} />
                </div>

                <div>
                    <InputLabel htmlFor="provinsi" value="Provinsi" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="provinsi"
                        errors={errors.provinsi}
                        value={data.provinsi}
                        onChange={e => setData('provinsi', e.target.value)}>
                        <option value="">Pilih Provinsi</option>
                        {provinces && provinces.map(province => (
                            <option key={province.id} value={province.id}>{province.nama}</option>
                        ))}
                    </SelectInput>

                    <InputError className="mt-2" message={errors.provinsi} />
                </div>
                <div>
                    <InputLabel htmlFor="kota" value="Kota/Kabupaten" />
                    <SelectInput
                        className="mt-1 block w-full"
                        name="kota"
                        errors={errors.kota}
                        value={data.kota}
                        onChange={e => setData('kota', e.target.value)}>
                        <option value="">Pilih Kabupaten/Kota</option>
                        {districts && districts.map(district => (
                            <option key={district.id} value={district.id}>{district.nama}</option>
                        ))}
                    </SelectInput>

                    <InputError className="mt-2" message={errors.kota} />
                </div>
                <div>
                    <InputLabel htmlFor="kecamatan" value="Kecamatan" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="kecamatan"
                        errors={errors.kecamatan}
                        value={data.kecamatan}
                        onChange={e => setData('kecamatan', e.target.value)}>
                        <option value="">Pilih Kecamatan</option>
                        {subDistricts && subDistricts.map(subDistrict => (
                            <option key={subDistrict.id} value={subDistrict.id}>{subDistrict.nama}</option>
                        ))}
                    </SelectInput>

                    <InputError className="mt-2" message={errors.kota} />
                </div>
                <div>
                    <InputLabel htmlFor="alamat" value="Alamat" />

                    <TextAreaInput
                        id="alamat"
                        className="mt-1 block w-full"
                        value={data.alamat}
                        onChange={(e) => setData('alamat', e.target.value)}
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.alamat} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

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
    );
}
