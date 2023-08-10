import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Bengkel({ auth, bengkels, assetPath }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Bengkel</h2>}
        >
            <Head title="Bengkel" />
            <div className="flex flex-col h-fit content-between">
                <h2 className="card-title text-3xl w-2/3">Data Bengkel</h2>
            </div>
        </AuthenticatedLayout>
    );
}
