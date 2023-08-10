import { Card } from '@/Components/Order/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Order({ auth, layanans, assetPath }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="flex flex-col h-fit content-between">
                <h2 className="card-title text-3xl w-2/3">Layanan</h2>
                <div className="flex flex-wrap">
                    {layanans.length > 0 ? layanans.map(layanan => {
                        return <Card key={layanan.id} layanan={layanan} assetPath={assetPath} konfirmasi={false}/>
                    }) : <div>Data Tidak ada</div>}
                </div>
                <div className="divider"></div>
            </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
