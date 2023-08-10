import { Card } from '@/Components/Layanan/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Layanan({ auth, layanans, assetPath }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Garasi</h2>}
        >
            <Head title="Dashboard" />
            <div className="card-actions w-1/4 mb-3 justify-center align-bottom">
                <Link href={route('layanan.create')} className="w-full btn btn-primary">Tambah Layanan</Link>
            </div>
            <div className="flex flex-col h-fit content-between">
                <h2 className="card-title text-3xl w-2/3">Layananku <div className="badge badge-primary text-white uppercase">utama</div></h2>
                <div className="flex flex-wrap">
                    {layanans.length > 0 ? layanans.map(layanan => {
                        return <Card key={layanan.id} layanan={layanan} assetPath={assetPath} />
                    }) : <div>Data Tidak ada</div>}
                </div>
                <div className="divider"></div>
            </div>
        </AuthenticatedLayout>
    );
}
