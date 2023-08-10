import NavBar from '@/Components/NavBar';
import BottomNavigation from '@/Components/BottomNavigation';

export default function Authenticated({ user, children }) {
    return (
        <div className="min-h-screen bg-gray-100 mb-20 md:mb-0">
            <NavBar user={user.name} role={user.role}/>
            <div className="container mx-auto">
                <main className='w-full bg-white min-h-screen p-4 my-5 rounded'>{children}</main>
            </div>
            <BottomNavigation />
        </div>
    );
}
