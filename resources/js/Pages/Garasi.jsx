import { Card } from '@/Components/Kendaraan/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Garasi({ auth, mobils, assetPath }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Garasi</h2>}
        >
            <Head title="Dashboard" />
            <div className="flex flex-col h-fit content-between">
                <h2 className="card-title text-3xl w-2/3">Mobilku <div className="badge badge-primary text-white uppercase">utama</div></h2>
                {mobils.length > 0 && mobils.map(mobil => {
                    return <Card key={mobil.id} mobil={mobil} assetPath={assetPath}/>
                })}
                <div className="divider"></div>
                <div className="card-actions w-full justify-center align-bottom">
                    <Link href={route('kendaraan.create')} className="w-full btn btn-primary">Tambah Kendaraan</Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
