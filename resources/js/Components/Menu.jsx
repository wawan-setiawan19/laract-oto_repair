import { Link } from '@inertiajs/react'
import React from 'react'

const Menu = () => {
    return (
        <ul className="menu bg-base-200 md:menu-horizontal rounded-box">
            <li>
                <Link href={route('dashboard')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <span className="btm-nav-label">Home</span>
                </Link>
            </li>
            <li>
                <Link href={route('order')}>
                    <svg className='h-7 w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="4" width="14" height="17" rx="2" stroke="#222222" /><path d="M9 9H15" stroke="#222222" strokeLinecap="round" /><path d="M9 13H15" stroke="currentColor" strokeLinecap="round" /><path d="M9 17H13" stroke="#222222" strokeLinecap="round" /></svg>
                    <span className="btm-nav-label">Order</span>
                </Link>
            </li>
            <li>
                <Link href={route('garasi')}>
                    <svg className='w-7 h-7' viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg" fill='none' stroke='currentColor'><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.4,36.1457s-.1939,1.511,0,2.2286c.1347,.4981,.264,1.3371,.78,1.3371h2.8971c.516,0,.6453-.8391,.78-1.3371,.1939-.7172,0-2.2286,0-2.2286" /><rect x="4.5" y="21.66" width="39" height="14.4857" rx="4.4571" ry="4.4571" /><path d="M35.1429,36.1457s-.1939,1.511,0,2.2286c.1347,.4981,.264,1.3371,.78,1.3371h2.8971c.516,0,.6453-.8391,.78-1.3371,.1939-.7172,0-2.2286,0-2.2286" /><circle cx="10.6286" cy="29.46" r="2.2286" /><path d="M8.9571,21.66l2.5629-10.0286c.438-1.7138,2.3534-3.3429,4.1229-3.3429h16.7143c1.7695,0,3.6849,1.6291,4.1229,3.3429l2.5629,10.0286" /><circle cx="37.3714" cy="29.46" r="2.2286" /></svg>
                    <span className="btm-nav-label">Garasi</span>
                </Link>
            </li>
            <li>
                <Link href={route('transaksi')}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>
                    <span className="btm-nav-label">Transaksi</span>
                </Link>
            </li>
            <li>
                <Link href={route('akun')}>
                    <svg className='h-7 w-7' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="btm-nav-label">Akun</span>
                </Link>
            </li>
        </ul>
    )
}

export default Menu