import React, { useState, useEffect } from 'react'
import Footer from '../components/layout/Footer'
import apivilla from './villas/ApiVilla'
import navbar from '../components/layout/NavigationBar'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from "react-router-dom"
import { listVilla } from './action/villaAction'

export default function Villas() {
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
      
  return (
    <>
  <div class="flex text-center">
  <nav class="bg-green-50 shadow dark:bg-gray-800 tracking-wider content-center fixed text-center w-screen z-20">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a href="" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 z-20">home</a>

            <a href="/villbook/allvilla" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">All Villa</a>

            <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">start journey</a>

            <a href="" onClick={onSubmit} class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">signout</a>

            <a href="https://twitter.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>

            <a href="https://www.instagram.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" /></svg>
            </a>
        </div>
    </nav>
  <h2 class="text-3xl pb-40 tracking-tighter text-blue-100 p-4 self-center content-center absolute text-left w-full :text-4xl">Find the best spot</h2>
  <h2 class="text-3xl pb-24 tracking-tighter text-green-300 p-4 self-center content-center absolute text-left w-full :text-4xl"> For your next</h2>
  <h2 class="text-5xl pb-4 tracking-tighter text-gray-800 font-bold p-4 self-center content-center absolute text-left w-full :text-4xl">Holidays</h2>

  <img class="w-full object-cover h-20 block mx-auto  sm:block sm:w-full " 
  src="https://img.pngio.com/wallpaper-on-line-hd-panorama-view-wallpapers-cool-panoramic-png-1600_475.png"
   alt="Banner" width="1920" height="288" />
  </div>
  
  <div className="grid grid-cols-1 pl-20">
  <h3 class="text-3xl pb-4 pl-20 tracking-tighter text-green-900 font-mono p-4 self-center content-center absolute text-left w-full text-2xl ">Where you gonna go ? </h3>
<img class=" m-20  w-min- rounded-xl" style={{height:" 400px", width:" 900px"}} 
  src="https://lh5.googleusercontent.com/proxy/2QFWqWUZvHX2F-LmQIAx0mRuwLz9S6wqToo1uVHTUmTB_ftZ7BGfB0TjB7L4Fyqa6BF4C1Y8TZKn0cqPRwIS-MSteg=s0-d" 
   />
</div>
 
  <div className="grid grid-cols-4 bg-green-50" >
  <h3 class="text-3xl pb-4 pl-20 tracking-tighter text-green-900  p-4 self-center content-center absolute text-left w-full text-2xl ">Holidays in a different way :</h3>
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://media.istockphoto.com/vectors/landscape-vector-id477824168?k=6&m=477824168&s=612x612&w=0&h=GM9MhsTJyPJiQkJp_s8ADtyIDt_CZbVaDd6NRNrhTU4="
    />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://lh3.googleusercontent.com/proxy/16E6niqnk1h3DrpBttUCv0RREbNhwdkU-usCpxeAXd7ngYfSt-Tzn_po_tAZQL2zxhM5y-jXQtvF4Cd54RMv-jPRU73qCf_bKCqtcKzn1xD1iMcTTlgROJ5QWvkGR2S6j5Mr8166k0g9BfJCYEWQMyDMMSf9KE0Lww"
    />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPY_YN1bCVqU7u6t4XZxrjMZC_Yx3-P-NoZw&usqp=CAU"
    />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="data:image/jpeg;base64,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"
    />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://static.vecteezy.com/system/resources/previews/000/213/417/original/fly-fishing-in-mountain-stream-illustration-vector.jpg" 
   />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://cdn.dribbble.com/users/1584338/screenshots/14074277/2006.i203.004.s.m004.c12.camping_cartoon_composition_4x.jpg" 
   />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://image.freepik.com/free-vector/beach-cartoon-illustration_1196-552.jpg" 
   />
  <img class=" m-20  w-full rounded-xl" style={{height:" 200px", width:" 200px"}} 
  src="https://lh3.googleusercontent.com/proxy/A9QB2n6fMNrl7RTl3csiyhPMPEuPLCCi-kPvrb7jEn66zYS8I4sUmTZILTzEQrpVY1rXsDKzc0XJTI-Ol_vG5O3koEEiVbyIeYoUsTPqi1Y-0ZuHovRL55_5sZBtrW6UCzVVcewjUTKjowKX2-bxj-Cb-azFJwM_WcJpaK2Pbs3Tv0pdmOifhNZoZcAN0yg" 
   />
     
  
  </div>  
  
     
      {/* <div className=" grid grid-flow-col grid-cols-3 grid-rows-5 gap-4 p-10 m-0 bg-green-50">
  
        {villa &&
          villa.map((row, index) => {
            return (

              <div className="lg border-b-2 border-gray-600  ">
                
                
                <Link to={`/villbook/detail/` + row.villa_id}>
                <img src={require("../../uploads/" + row.villas_images[0].viim_filename).default}
                                        alt={`${row.villa_id}`}
                                        class="border border-white-700 m-0 border-solid w-full hover:border-white-500 rounded-xl" style={{height:" 200px", width:" 1000px"}}
                                    />
                  <a class="pt-2 m-0 leading-4 text-gray-800 font-bold hover:text pl-4">{row.villa_title}</a>
                  <p class="pl-4 font-bold text-gray-800 text-sm">${row.villa_price}/Night</p>
                  <p class="text-gray-800 font-medium text-sm pl-4 flex text-gray-700 dark:text-gray-200"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>{row.villa_address}</p>
                </Link>
              </div>


            );

          })}

      </div>
       */}
<header class="bg-white dark:bg-gray-800">  
    <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button class="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
                <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">Special Offers</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div class="mt-6">
                    <a href="#" class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download from App Store</a>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo"/>
        </div>
    </div>
</header>

      <footer class="flex flex-col items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 sm:flex-row">
            <a href="#" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">The VillaBook</a>
            
            <p class="py-2 text-gray-800 dark:text-white sm:py-0">All rights reserved</p>

            <div class="flex -mx-2">
                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                    aria-label="Facebook">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                <a href="#" class="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
            </div>
        </footer>

    </>

  )
}