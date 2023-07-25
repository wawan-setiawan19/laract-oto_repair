import { Card } from '@/Components/Kendaraan/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Garasi({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Garasi</h2>}
        >
            <Head title="Dashboard" />
            <div className="flex flex-col h-fit content-between">
                <Card />
                <Card />
                <div className="divider"></div>
                <div className="card-actions w-full justify-center align-bottom px-5">
                    <button className="w-full btn btn-primary">Tambah Kendaraan</button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
