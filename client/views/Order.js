import React, { useEffect, useState } from 'react'
import { listVilla } from './action/villaAction'
import { useDispatch, useSelector } from 'react-redux';
import vill from '../assets/images/villbook.png';
import { orderUpdate, orderOne} from './action/orderAction';
import Bayar from '../ButtonBayar'
import { useHistory } from 'react-router-dom';
import ApiLite from "./apiRemove/removeLite";


export default function Order() {
    const history = useHistory();
    const [bayar,setBayar]=useState("")
    const dispatch = useDispatch();
    const orderOneCheck = useSelector(state => state.orderOneCheck)
    const { ord } = orderOneCheck
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    const villaList = useSelector(state => state.villaList)
    const { villa } = villaList
    

    if (bayar) {
        const data = {
            user_id: parseInt(userInfo.users.user_id),
            order_payt_trx_number: bayar.payt_trx_number
        }
        console.log(data);
        dispatch(orderUpdate(data))
        history.push('/villbook/landing/')
    }

    useEffect(() => {
        if (userInfo) {
            dispatch(orderOne(userInfo.users.user_id))
        }
    }, [dispatch])
    useEffect(() => {
        dispatch(listVilla())
    }, [dispatch])

    const onDelete = async (id) => {
        ApiLite.removeOrder(id).then(result => {
          setStatus(true)
        })
      }

    return (
        <>
            <div class="flex justify-center my-6">
                <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div class="flex-1">
                        <a href="/villbook/cart/">
                        <img src={vill} className="absolute pt-2 relative" ></img>
                        </a>
                        <div class="p-4 bg-green-400 rounded-full mb-4 ">

                            <h1 class="ml-2 text-white font-bold uppercase">My Order</h1>
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
                                {ord && ord.line_items && ord.line_items.map((row, index) => {
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
                                                    <p className="mb-2 ">{item && item.villa_title}</p>
                                                    <button onClick={() => {
                                                        onDelete(row.lite_order_id)
                                                        window.location = '/villbook/cart/'
                                                    }} type="submit"
                                                        className="text-gray-700 md:ml-4">
                                                        <small>(Remove item)</small>
                                                    </button>
                                                </a>
                                            </td>
                                            <td class="hidden text-right md:table-cell ">
                                                <span className="text-sm lg:text-base font-medium mb-2 pr-10">
                                                    {new Intl.NumberFormat('en-US', { style: 'decimal' }).format(row.lite_days)}
                                                </span>
                                            </td>
                                            <td class="hidden text-right md:table-cell">
                                                <span className="text-sm lg:text-base font-medium pr-8">
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

                        {ord &&
                            <tr>
                                <div class="my-4 mt-6 -mx-2 lg:flex">
                                    <div class="lg:px-2 lg:w-1/2">
                                        <div class="p-4 bg-gray-100 rounded-full">
                                            <h1 class="ml-2 font-bold uppercase">Coupon Code</h1>
                                        </div>
                                        <div class="p-4">
                                            <p class="mb-4 italic">If you have a coupon code, please enter it in the box below</p>
                                            <div class="justify-center md:flex">
                                                <form action="" method="POST">
                                                    <div class="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                                                        <input type="coupon" name="code" id="coupon" placeholder="Apply coupon" value=""
                                                            class="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none" />
                                                        <button type="submit" class="text-sm flex items-center px-3 py-1 text-white bg-blue-700 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none">
                                                            <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" /></svg>
                                                            <span class="font-medium">Apply coupon</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="p-4 mt-6 bg-gray-100 rounded-full">
                                            <h1 class="ml-2 font-bold uppercase">Instruction for seller</h1>
                                        </div>
                                        <div class="p-4">
                                            <p class="mb-4 italic">If you have some information for the seller you can leave them in the box below</p>
                                            <textarea type="text" class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                                        </div>
                                    </div>
                                    <div class="lg:px-2 lg:w-1/2">
                                        <div class="p-4 bg-gray-100 rounded-full">
                                            <h1 class="ml-2 font-bold uppercase">Order Details</h1>
                                        </div>
                                        <div class="p-4">
                                            <p class="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                                            <div class="flex justify-between border-b">
                                                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Order ID
                                                </div>
                                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    {ord.order_id}
                                                </div>
                                            </div>
                                            <div class="flex justify-between pt-4 border-b">
                                                <div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                                                    <form action="" method="POST">
                                                        <button type="submit" class="mr-2 mt-1 lg:mt-2">
                                                            <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" class="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z" /></svg>
                                                        </button>
                                                    </form>
                                                    Coupon
                                                </div>
                                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                                                    -
                                                </div>
                                            </div>
                                            <div class="flex justify-between pt-4 border-b">
                                                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Discount 5%
                                                </div>
                                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    {ord.order_discount}
                                                </div>
                                            </div>
                                            <div class="flex justify-between pt-4 border-b">
                                                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Tax
                                                </div>
                                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    {ord.order_tax}
                                                </div>
                                            </div>
                                            <div class="flex justify-between pt-4 border-b">
                                                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Total
                                                </div>
                                                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    {ord.order_total_due}
                                                </div>
                                            </div>
                                            <Bayar amount={ord.order_total_due} orderNumber={ord.order_id} onSuccess={setBayar}/>
                                        </div>
                                    </div>

                                </div>
                            </tr>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
