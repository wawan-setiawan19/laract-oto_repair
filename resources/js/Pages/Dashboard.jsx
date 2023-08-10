import MenuServis from '@/Components/Dashboard/MenuServis';
import Rekomendasi from '@/Components/Dashboard/Rekomendasi';
import SearchBar from '@/Components/Dashboard/SearchBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DashboardAdmin from '@/Pages/Admin/Dashboard';
import DashboardBengkel from '@/Pages/Bengkel/Dashboard';
import { Head, router } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Dashboard({ auth, ...rest }) {
    if (auth.user.role == 'admin') {
        router.visit(route('admin.dashboard'))
    }

    if (auth.user.role == 'bengkel') {
        router.visit(route('bengkel.dashboard'))
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            {auth.user.role == 'user' && <>
                <SearchBar />
                <MenuServis />
                <Rekomendasi />
            </>}
        </AuthenticatedLayout>
    );
}
