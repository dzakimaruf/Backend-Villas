import React, { useEffect, useState } from 'react'
import { listOneCart } from './action/CartAction'
import { useDispatch, useSelector } from 'react-redux';
import ApiLite from './apiRemove/removeLite';
import { listVilla } from './action/villaAction';
import vill from '../assets/images/villbook.png';

export const Cart = () => {

  const dispatch = useDispatch();
  const CartOne = useSelector(state => state.CartOne)
  const { cart } = CartOne
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const villaList = useSelector(state => state.villaList)
  const { villa } = villaList

  useEffect(() => {
    if (userInfo) {
      dispatch(listOneCart(parseInt(userInfo.users.user_id)))
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(listVilla())
  }, [dispatch])

  const onDelete = async (id) => {
    ApiLite.remove(id).then(result => {
      setStatus(true)
    })
  }

  return (

    <div class="flex justify-center my-6">
      {/* <nav class="bg-green-50 shadow dark:bg-gray-800 tracking-wider content-center fixed text-center w-full z-20">
                    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                        <div class="relative hidden md:block" style={{ marginLeft: "-30vh" }}>
                            <input type="search" class=" pl-12 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />
                            <svg class="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <a href="/villbook/landing" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6 z-20">home</a>

                        <a href="/villbook/allvilla" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">All Villa</a>

                        <a href=""   class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">signout</a>

                        <a href="https://twitter.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>

                        <a href="https://www.instagram.com/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" /></svg>
                        </a>
                    </div>
                </nav> */}

      <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div class="flex-1">
          <a href = "/villbook/allvilla">
          <img src={vill} className="absolute pt-2 relative" ></img>     
          </a>     
          <div class="p-4 bg-green-400 rounded-full mb-4 flex gap-10 ">
            <a href= "" class="ml-2 text-white font-bold uppercase">My Cart</a>
            <a href="/villbook/allvilla/"class="ml-2 text-white font-bold uppercase flex gap-2">Add More to Cart
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg></a>
          </div>
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Total Days</span>
                </th>
                <th class="hidden text-right md:table-cell">Unit price</th>
                <th class="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              {cart && cart.line_items && cart.line_items.map((row, index) => {
                const item = villa && villa.find(x => x.villa_id === row.lite_villa_id)
                return (
                  <tr key={index}>
                    <td class="hidden pb-4 md:table-cell gap-0">
                      <a href="#">
                        <img src={item && "/api/upload/" + item.villas_images[0].viim_filename} className="h-80 w-40 rounded gap-0" alt="Thumbnail" />
                      </a>
                    </td>
                    <td>
                      <a href={`/villbook/detail/` + row.lite_villa_id}>
                        <p className="mb-2  ">{item && item.villa_title}</p>
                        <button onClick={() => {
                          onDelete(row.lite_vica_id)
                          window.location = '/villbook/cart/'
                        }} type="submit"
                          className="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </a>
                    </td>
                    <td class="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input type="number" value={row.lite_days}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                        </div>
                      </div>
                    </td>
                    <td class="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium pr-8" >
                        {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(item && item.villa_price)}
                      </span>
                    </td>
                    <td class="text-right">
                      <span className="text-sm lg:text-base font-medium pr-8">
                        {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(row.lite_price)}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>

          </table>

          <div class="lg:px-2 lg:w-1/2 flex">
            <a href="/villbook/cart/address">
              <button className="p-4 bg-green-400 rounded-full flex  ">
                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                <span className="ml-2 mt-x ml-2 text-white font-bold uppercase">Order Now</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}
