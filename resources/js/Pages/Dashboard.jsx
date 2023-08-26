import MenuServis from '@/Components/Dashboard/MenuServis';
import Rekomendasi from '@/Components/Dashboard/Rekomendasi';
import SearchBar from '@/Components/Dashboard/SearchBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard({ auth, ...rest }) {
    if (auth.user.role == 'admin') {
        router.visit(route('admin.dashboard'))
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            {auth.user.role != 'admin' && <>
                <SearchBar />
                <MenuServis />
                <Rekomendasi role={auth.user.role}/>
            </>}
        </AuthenticatedLayout>
    );
}
