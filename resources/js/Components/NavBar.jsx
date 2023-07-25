import { Link } from '@inertiajs/react'
import React from 'react'
import Logout from './Logout'
import Menu from './Menu'

const NavBar = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="container mx-auto">

            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-2xl text-info-content gap-0"><span className='text-warning'>Oto</span>Repair</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <Menu/>
            </div>
            {user && <>
            <div className="navbar-end flex flex-row">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-warning indicator-item"></span>
                    </div>
                </button>
                <div className="dropdown dropdown-end hidden md:block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://picsum.photos/200" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-2xl uppercase ml-2 font-bold text-center'>{user}</li>
                        <div className="divider"></div>
                        <li>
                            <Link href={route('profile.edit')} className="justify-between">
                                Profile
                                <span className="badge badge-success">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li><Logout/></li>
                    </ul>
                </div>
            </div>
            </>
            }
            </div>
        </div>
    )
}

export default NavBar