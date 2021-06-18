import React from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import codeid from '../../assets/images/logovilla.png'



export default function Sidebar() {


    const location = useLocation()
    const redirect = location.search
        ? new URLSearchParams(location.search).get("redirect")
        : '/villbook/signin';
    const history = useHistory()
    const onSubmit = () => {

        localStorage.clear();
        history.push(redirect)
    }

    return (
        <>
            <nav className="h-screen flex flex-col w-32 bg-blue-900 min-h-screen overflow-auto">
                <div className="p-4">
                </div>
                <ul className="p-2 space-y-2 flex-1 overflow-auto" >
                    <li>
                        <Link to="/villbook/dashboard" className="flex space-x-2 items-center text-gray-100 font-bold p-2  hover:bg-gray-200 rounded-lg hover:text-blue-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/villbook/adminvilla" className="flex space-x-2 items-center text-gray-100 font-bold p-2 hover:bg-gray-200 rounded-lg hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <span>Villa</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/villbook/landing" className="flex space-x-2 items-center text-gray-100 font-bold p-2 hover:bg-gray-200 rounded-lg hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span>All Villa</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onSubmit} className="flex space-x-2 items-center text-gray-100 font-bold p-2 hover:bg-gray-200 rounded-lg hover:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <span>Signout</span>
                        </Link>
                    </li>

                </ul>


            </nav>

        </>
    )
}