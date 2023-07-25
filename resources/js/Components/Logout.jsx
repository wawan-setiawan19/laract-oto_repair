import { Link } from '@inertiajs/react'
import React from 'react'

const Logout = () => {
    return (
        <div className="max-w-7xl mx-auto sm:px-7 lg:px-5">
            <div className="bg-ghost overflow-hidden sm:rounded-lg">
                <Link className='btn btn-error' href={route('logout')} method="POST" as='button'>log out</Link>
            </div>
        </div>
    )
}

export default Logout