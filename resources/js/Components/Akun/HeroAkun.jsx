import { Link } from '@inertiajs/react'
import React from 'react'

const HeroAkun = ({ user, percentage }) => {
    return (
        <div className="hero-content flex-row align-top justify-start lg:flex-row">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://picsum.photos/200" />
                </div>
            </div>
            <div className='w-full'>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <h1 className="text-xl font-bold">{user.email}</h1>
                {percentage < 100 && <>
                    <div>
                        <p className='text-sm py-2'>Kelengkapan profil</p>
                        <progress className="progress transition progress-primary w-full" value={percentage || 0} max="100"></progress>
                    </div>
                    <Link href={route('profile.edit')} className="btn btn-outline text-left py-4">Yuk lengkapi profil!!!</Link>
                </>
                }
            </div>
        </div>
    )
}

export default HeroAkun