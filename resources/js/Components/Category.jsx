import { Link } from '@inertiajs/react'
import React from 'react'

const Category = ({ role }) => {
    let rute = ''
    role == 'bengkel' ? rute = 'layanan' : rute = 'order'
    return (
        <ul className="menu bg-base-200 md:menu-horizontal rounded-box">
            <li>
                <Link href={route(`${rute}`)} className="flex flex-col items-center">
                    <span>Semua</span>
                </Link>
            </li>
            <li>
                <Link href={route(`${rute}.category`, 'oli')} className="flex flex-col items-center">
                    <span>Oli</span>
                </Link>
            </li>
            <li>
                <Link href={route(`${rute}.category`, 'rem')} className="flex flex-col items-center">
                    <span>Rem</span>
                </Link>
            </li>
            <li>
                <Link href={route(`${rute}.category`, 'berkala')} className="flex flex-col items-center">
                    <span>Berkala</span>
                </Link>
            </li>
            <li>
                <Link href={route(`${rute}.category`, 'ban')} className="flex flex-col items-center">
                    <span>Ban</span>
                </Link>
            </li>
            <li>
                <Link href={route(`${rute}.category`, 'tune up')} className="flex flex-col items-center">
                    <span>Tune Up</span>
                </Link>
            </li>
        </ul>
    )
}

export default Category