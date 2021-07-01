import React, { Fragment, useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { DocumentAddIcon } from '@heroicons/react/solid'
import { orderInput } from './action/OrderAction';
import vill from '../assets/images/villbook.png';

export default function addressInput() {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    const [values, setValues] = useState({
        order_user_id: undefined,
        order_address: undefined,
        order_city: undefined,
        order_start_date: undefined
    });
    const handleOnChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            order_user_id: parseInt(userInfo.users.user_id),
            order_address: values.order_address,
            order_city: values.order_city,
            order_start_date: values.order_start_date
        }

        dispatch(orderInput(data)).then((result) => {
            history.push('/villbook/order')
        });
    }
    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    open={open}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-400">
                                <div className="bg-gray-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:items-start">
                                        <img src={vill} className="pt-2" ></img>
                                        <section class="max-w-4xl p-6 mx-auto bg-gray-200 rounded-md dark:bg-gray-800">
                                            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Booking Form</h2>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900" title={'Villas'} />
                                                <form>
                                                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                                        <div>
                                                            <label class="text-gray-700 dark:text-gray-200" for="username">City</label>
                                                            <input
                                                                type="text"
                                                                name="order_city"
                                                                id="order_city"
                                                                onChange={handleOnChange('order_city')}
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Address</label>
                                                            <textarea
                                                                name="order_address"
                                                                id="order_address"
                                                                onChange={handleOnChange('order_address')}
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            ></textarea>                                                        </div>

                                                        <div>
                                                            <label class="text-gray-700 dark:text-gray-200" for="password">Start Date</label>
                                                            <input
                                                                type="date"
                                                                name="order_start_date"
                                                                id="order_start_date"
                                                                onChange={handleOnChange('order_start_date')}
                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="flex justify-end mt-6">
                                                    </div>
                                                </form>
                                            </div>
                                        </section>
                                    </div>

                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={onSubmit}
                                    >
                                        Submit
                                    </button>
                                    <Link to="/villbook/detail">
                                        <button
                                            type="submit"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-200 focus:outline-none  focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root >
        </div>
    )
}