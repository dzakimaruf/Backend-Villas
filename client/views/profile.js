import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import vill from '../assets/images/villbook.png';
import { findAllOrder } from './action/orderAction';
import { useHistory, useLocation } from 'react-router-dom';
import { userOne } from './action/UserAction';

export default function profile() {

    const dispatch = useDispatch()
    const findUser = useSelector(state => state.findUser)
    const { finduser } = findUser
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin

    const location = useLocation()
    const redirect = location.search
        ? new URLSearchParams(location.search).get("redirect")
        : '/villbook/signin/';
    const history = useHistory()
    const onSubmit = () => {
        localStorage.clear();
        history.push(redirect)
    }

    useEffect(() => {
        dispatch(userOne(parseInt(userInfo.users.user_id)))
    }, [dispatch])

    return (


        <div class="bg-white-50 max-h-100hv">
            <nav class="bg-green-50 shadow dark:bg-gray-800 tracking-wider content-center fixed text-center w-screen z-20">
                <a href="/villbook/landing">
                <img src={vill} className="absolute pt-2 " ></img>
                </a>
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

                    <a href="/villbook/landing" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 z-20">home</a>

                    <a href="/villbook/allvilla" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">All Villa</a>

                    <a href="" onClick={onSubmit} class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">signout</a>

                    <a href="https://twitter.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </a>

                    <a href="https://www.instagram.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" /></svg>
                    </a>
                </div>
            </nav>
            <div class="w-full text-white bg-main-color">
                <div x-data="{ open: false }"
                    class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div class="p-4 flex flex-row items-center justify-between">
                        <a href="#"
                            class="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">example
                            profile</a>
                        <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                <path x-show="!open" fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                                <path x-show="open" fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {finduser &&
                <div class="container mx-auto my-5 p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">
                        <div class="w-full md:w-3/12 md:mx-2">
                            <div class="bg-green-50 p-3 border-t-4 border-green-400">
                                <div class="image overflow-hidden">
                                    <img class="h-auto w-full mx-auto"
                                        src="data:image/jpeg;base64,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"
                                        alt="" />
                                </div>
                                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1"> {finduser.user_name} </h1>
                                <h3 class="text-gray-600 font-lg text-semibold leading-6">{finduser.user_email} </h3>
                                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
                                <ul
                                    class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li class="flex items-center py-3">
                                        <span>Status</span>
                                        <span class="ml-auto"><span
                                            class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li class="flex items-center py-3">
                                        <span>Member since</span>
                                        <span class="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="my-4"></div>
                            
                        </div>
                        <div class="w-full md:w-9/12 mx-2 h-64">
                            <div class="bg-green-50 p-3 shadow-sm rounded-sm">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">About</span>
                                </div>
                                <div class="text-gray-700">
                                    <div class="grid md:grid-cols-2 text-sm">
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">First Name</div>
                                            <div class="px-4 py-2">{finduser.user_name}</div>
                                        </div>

                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Gender</div>
                                            <div class="px-4 py-2">{finduser.user_gender}</div>
                                        </div>

                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Email.</div>
                                            <div class="px-4 py-2">
                                                <a class="text-blue-800" href="mailto:jane@example.com">{finduser.user_email}</a>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Birthday</div>
                                            <div class="px-4 py-2">{finduser.user_birthdate}</div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                                    Full Information</button>
                            </div>

                            <div class="my-4"></div>

                            <div class="bg-gray-100 p-3 shadow-sm rounded-sm">

                                <div class="grid grid-cols-2">
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">Last transaction</span>
                                        </div>

                                        {finduser &&
                                            finduser.orders.map((baris, index) => {
                                                return (
                                                    <ul class="list-inside space-y-2">
                                                        <li>
                                                            <div class="text-teal-600">{baris.order_id}</div>
                                                            <div class="text-gray-500 text-xs">Create : {baris.order_created_on}</div>
                                                            <div class="text-gray-500 text-xs">Total : {baris.order_total_due}</div>
                                                            <div class="text-gray-500 text-xs">Status : {baris.order_status}</div>
                                                        </li>
                                                    </ul>
                                                );
                                            })}

                                    </div>
                                    <div>
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path fill="#fff"
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </span>
                                            {/* <span class="tracking-wide">Education</span> */}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
