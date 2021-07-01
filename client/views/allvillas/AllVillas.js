import React, { useState, useEffect } from 'react'
import vill from '../../assets/images/villbook.png'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from "react-router-dom"
import { SearchCircleIcon } from '@heroicons/react/solid';
import { listVilla, searchVilla } from '../action/villaAction'

export default function AllVillas() {
  const dispatch = useDispatch();
  const villaList = useSelector(state => state.villaList);
  const { villa } = villaList
  const location = useLocation()
  const redirect = location.search
    ? new URLSearchParams(location.search).get("redirect")
    : '/villbook/signin';
  const history = useHistory()
  const onSubmit = () => {

    localStorage.clear();
    history.push(redirect)
  }

  useEffect(() => {
    dispatch(listVilla())
  }, [dispatch])

  const handleOnchange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  }

  const [values, setValues] = useState({
    villa_title: undefined,
    villa_fasilitas: undefined
  });

  const onSubmit1 = (e) => {
    e.preventDefault();
    console.log(values.villa_fasilitas)
    dispatch(searchVilla(values.villa_fasilitas)).then((result) => {
      /* history.push('/courseonline/search') */
    });
  }
  const handleKeyDown = (e) => {
    e.key === 'Enter'
    dispatch(searchVilla(values.villa_title)).then((result) => {
      /* history.push('/courseonline/search') */
    });
  }
  return (
    <>
      <div className="flex relative text-center">
        <nav class="bg-green-50 shadow dark:bg-gray-800 tracking-wider content-center fixed text-center w-full z-20">
          <a href="/villbook/landing">
            <img src={vill} className="absolute pt-2" href="/villbook/landing" ></img>
          </a>
          <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <div class="relative hidden md:block" style={{ marginLeft: "-30vh" }}>
              <input type="search" onChange={handleOnchange('villa_title')} onKeyDown={handleKeyDown} id="villa_title" name="villa_title" class=" pl-12 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />
              <svg class="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {/* <div>
                <button className="bg-white text-black relative" style={{ right: "40px", top: "5px" }}
                  onClick={onSubmit1} >
                  <SearchCircleIcon className="w-10 h-10" />
                </button>
              </div> */}
            </div>

            <a href="/villbook/landing" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 z-20">home</a>

            <a href="" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">All Villa</a>

            <a href="/villbook/signin" onClick={onSubmit} class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">signout</a>

            <a href="https://twitter.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>

            <a href="https://www.instagram.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" /></svg>
            </a>

            <a href="/villbook/cart/" class="ml-2 text-gray  uppercase flex gap-2">back to Cart
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg></a>
          </div>
        </nav>
      </div>
      {/* <div class="bg-green-200 shadow dark:bg-gray-800 tracking-wider content-center fixed text-center w-full z-20 space-y-5">
                Inspired from Dribbble Shot by <a href="https://dribbble.com/shots/14127375-Product-Page" class="font-bold underline hover:text-indigo-100">Vishnu Prasad</a>.
  See his works on <a href="https://dribbble.com/vlockn" class="font-bold underline hover:text-indigo-100">Dribbble</a>.
</div> */}
      <div class="flex items-center justify-between  ">
        <div class="hidden w-full text-gray-600 md:flex md:items-center">
        </div>
        <div class="w-80 h-30 text-gray-700 md:text-center text-2xl font-semibold ">

        </div>

        <div class="bg-white shadow-sm sticky top-0">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
            <div class="flex items-center justify-between md:justify-start">

            </div>

          </div>
        </div>

      </div>
      <div className=" grid grid-col grid-cols-3 gap-6 p-10 m-0 pt-20">

        {villa &&
          villa.map((baris, index) => {
            return (

              <div className="" >
                <Link to={`/villbook/detail/` + baris.villa_id}>
                  <img src={require("../../../uploads/" + baris.villas_images[0].viim_filename).default}
                    alt={`${baris.villa_id}`}
                    class="border border-white-700 m-0 border-solid w-full hover:border-white-500 rounded-xl" style={{ height: " 150px", width: " 300px", marginLeft: "10vh" }}
                  />
                  <a style={{ marginLeft: "10vh" }} class="pt-2 m-0 leading-4 text-gray-800 hover:text pl-4">{baris.villa_title}</a>
                  <p style={{ marginLeft: "10vh" }} class="pl-4 font sans text-gray-800 text-sm">${baris.villa_price}/Night</p>
                  <p style={{ marginLeft: "10vh" }} class="text-gray-800  text-sm pl-4 flex text-gray-700 dark:text-gray-200"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>{baris.villa_address}</p>
                </Link>
              </div>
            );

          })}
        {villaList.searching &&
          villaList.searching.map((baris, index) => {
            return (

              <div className="" >
                <Link to={`/villbook/detail/` + baris.villa_id}>
                  <img src={require("../../../uploads/" + baris.villas_images[0].viim_filename).default}
                    alt={`${baris.villa_id}`}
                    class="border border-white-700 m-0 border-solid w-full hover:border-white-500 rounded-xl" style={{ height: " 150px", width: " 300px", marginLeft: "10vh" }}
                  />
                  <a style={{ marginLeft: "10vh" }} class="pt-2 m-0 leading-4 text-gray-800 hover:text pl-4">{baris.villa_title}</a>
                  <p style={{ marginLeft: "10vh" }} class="pl-4 font sans text-gray-800 text-sm">${baris.villa_price}/Night</p>
                  <p style={{ marginLeft: "10vh" }} class="text-gray-800  text-sm pl-4 flex text-gray-700 dark:text-gray-200"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>{baris.villa_address}</p>
                </Link>
              </div>
            );

          })}

      </div>

    </>

  )
}