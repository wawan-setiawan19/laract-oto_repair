import NavBar from '@/Components/NavBar';
import BottomNavigation from '@/Components/BottomNavigation';

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar user={user.name} />
            <div className="container mx-auto">
                <main className='w-full bg-white p-4 mt-5 rounded'>{children}</main>
            </div>

            <BottomNavigation />

        </div>
    );
}
