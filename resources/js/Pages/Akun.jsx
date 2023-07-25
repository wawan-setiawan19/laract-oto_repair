import HeroAkun from '@/Components/Akun/HeroAkun';
import MenuAkun from '@/Components/Akun/MenuAkun';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Akun({ auth, percentage }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Akun" />
            <HeroAkun user={auth.user} percentage={percentage}/>
            <div className="divider"></div>
            <MenuAkun/>
        </AuthenticatedLayout>
    );
}
