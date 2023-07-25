import { Link } from '@inertiajs/react'
import React from 'react'
import ApplicationLogo from '../ApplicationLogo'

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <ApplicationLogo/>
                    <p className="mb-5">Pilihan terbaik untuk mempercayakan servis kendaraan terbak Anda!!</p>
                    <Link href={route('login')} className="btn btn-warning text-info-content w-full">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero