import React, { useEffect, useState } from 'react';
import { Redirect, Link, useHistory, useLocation } from 'react-router-dom';
import Footer from "../../components/layout/Footer";
import { useDispatch, useSelector } from 'react-redux';
import ApiVilla from '../villas/ApiVilla';
import { oneVilla } from '../action/villaAction';

export default function lakeside({ match }) {
    const[villa, setVilla]=useState([])

    useEffect(()=>{
        ApiVilla.findOne(match.params.id).then(data=>{
            setVilla(data)
        })
    },[])

    const location = useLocation()
    const redirect = location.search
        ? new URLSearchParams(location.search).get("redirect")
        : '/villbook/signin';
    const history = useHistory()
    const onSubmit = () => {
  
        localStorage.clear();
        history.push(redirect)
    }
  
    // const dispatch = useDispatch();
    // const villaOne = useSelector(state => state.villaOne);
    // const { villas } = villaOne

    // useEffect(() => {
    //     dispatch(oneVilla(match.params.id))
    // }, [dispatch])

    return (
       <>
        <div class="flex relative text-center">
  <nav class="bg-white shadow dark:bg-gray-800 tracking-wider content-center fixed text-center w-full z-20">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a href="/villbook/landing" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 z-20">home</a>

            <a href="/villbook/allvilla" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">All Villa</a>

            <a href="" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Location</a>

            <a href="" onClick={onSubmit} class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">signout</a>

            <a href="https://twitter.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>

            <a href="https://www.instagram.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" /></svg>
            </a>
        </div>
    </nav>
    </div>

      <div class="bg-white shadow-sm sticky top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          <div class="flex items-center justify-between md:justify-start">

            <button type="button" class="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
              <svg class="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div class="flex justify-center items-center mt-0">
              <div class="relative hidden md:block" style={{ marginLeft: "70vh" }}>
                <input type="search" class=" pl-12 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />
                <svg class="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

            <div class="bg-white shadow-sm sticky top-0">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
                    <div class="flex items-center justify-between md:justify-start">

                        <button type="button" class="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
                            <svg class="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    {<div class="relative md:hidden">
                        <input type="search" class="pb-24mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />
                        <svg class="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>}


                </div>
            </div>
            { villa &&
            <div class="py-6">

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center space-x-2 text-gray-400 text-sm">
                        <a href="/villbook/Landing" class="hover:underline hover:text-gray-600">All Villa</a>
                        <span>
                            <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <a href="" class="hover:underline hover:text-gray-600">{villa.villa_title}</a>
                    </div>
                </div>


                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div x-data="{ image: 1 }" x-cloak>
                                <div class="h-64 md:h-80 rounded-lg bg-green-100 mb-4">
                                   { villa &&
                                    <img src={require("./../../../uploads/2.1.jpg")}
                    alt={`${villa.villa_id}`} />}
                                </div>

                                <div class="flex -mx-2 mb-4">
                                    <div class="flex-1 px-2">
                                        <button onclick="image = i" class="{ 'ring-2 ring-indigo-300 ring-inset' image === i }" class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                                            <span text="i" class="text-2xl"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                            
                            <div class="md:flex-1 px-4">
                                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{villa.villa_title}</h2>
                                <p class="text-gray-500 text-sm">  <a class="text-indigo-600 hover:underline">{villa.villa_address}</a></p>

                                <div class="flex items-center space-x-4 my-4">
                                    <div>
                                        <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                                            <span class="text-indigo-400 mr-1 mt-1">$</span>
                                            <span class="font-bold text-indigo-600 text-3xl">{villa.villa_price}</span>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-green-500 text-xl font-semibold">{villa.villa_tipe}</p>
                                        <p class="text-gray-400 text-sm">{villa.villa_fasilitas}</p>
                                    </div>
                                </div>

                                <p class="text-gray-500">{villa.villa_description}</p>

                                <div class="flex py-4 space-x-4">
                                    <div class="relative">
                                        <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Days</div>
                                        <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                        <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>

                                    <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                                        Booking Now
                                    </button>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>

                    }
        </>

    )
}
