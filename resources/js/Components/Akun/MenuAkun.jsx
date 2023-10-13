import { Link } from '@inertiajs/react'
import React from 'react'
import Logout from '../Logout'

const MenuAkun = () => {
    return (
        <>
            <ul className="menu bg-base-200 w-full rounded-box text-lg">
                <li>
                    <Link className='flex justify-between'>
                        <span>Bantuan</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className='flex justify-between'>
                        <span>Kebijakan Privasi</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className='flex justify-between'>
                        <span>Syarat</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link className='flex justify-between' href={route('about')}>
                        <span>Tentang</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </li>
            </ul>
            <div className="py-5 md:px-0">
                <Logout />
            </div>
        </>
    )
}

export default MenuAkun