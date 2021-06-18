import React, { Fragment, useRef, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentAddIcon } from '@heroicons/react/solid'
import apiOrder from './ApiOrder'
import apiUser from '../users/ApiUser'

export default function AddEditOrder(props) {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef();

    const [values, setValues] = useState({
        order_id: undefined,
        order_created_on: undefined,
        order_start_date: undefined,
        order_end_date: undefined,
        order_duration: undefined,
        order_price: undefined,
        order_description: undefined,
        order_status: undefined,
        order_user_id: undefined,
        order_villa_id: undefined,
        error: ""
    });

    const [users, setUsers] = useState([])


    useEffect(() => {
        apiUser.list().then(data => {
            setUsers(data);
        });

        if (props.order.actionType === 'Edit') {
            apiOrder.findOne(props.order.order_id).then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setValues({
                        ...values,
                        order_id: data.order_id,
                        order_created_on: data.order_created_on,
                        order_start_date: data.order_start_date,
                        order_end_date: data.order_end_date,
                        order_duration: data.order_duration,
                        order_price: data.order_price,
                        order_description: data.order_description,
                        order_status: data.order_status,
                        order_user_id: data.order_user_id,
                        order_villa_id: data.order_villa_id,

                    })
                }


            });
        } else {
            setValues({
                ...values,
                order_id: undefined,
                order_created_on: undefined,
                order_start_date: undefined,
                order_end_date: undefined,
                order_duration: undefined,
                order_price: undefined,
                order_description: undefined,
                order_status: undefined,
                order_user_id: undefined,
                order_villa_id: undefined,
            })
        }


    }, [props.order.actionType])



    const handleOnChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (props.order.actionType === 'Add') {
            const order = {
                order_id: values.order_id || undefined,
                order_created_on: values.order_created_on || undefined,
                order_start_date: values.order_start_date || undefined,
                order_end_date: values.order_end_date || undefined,
                order_duration: values.order_duration || undefined,
                order_price: values.order_price || undefined,
                order_description: values.order_description || undefined,
                order_status: values.order_status || undefined,
                order_user_id: values.order_user_id || undefined,
                order_villa_id: values.order_villa_id || undefined,
               

            }
            apiOrder.create(order).then(data => {
                if (data.error) {
                    console.log('create new record failed')
                    setValues({ ...values, error: data.error.message })
                } else {

                    props.setStatus();
                    props.setModal();
                }
            })
        } else if (props.order.actionType === 'Edit') {
            apiOrder.update(values).then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.errors[0].message })
                } else {
                    props.setStatus();
                    props.setModal();
                }
            });
        }


    }

    return (
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
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <DocumentAddIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            {props.order.actionType} {props.title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            {/** code here... */}
                                            <p className="text-red-900 text-xs italic">{values.error}</p>
                                            <form method="POST" action="#">
                                                <input id="order_id" name="order_id"
                                                    value={values.order_id}
                                                    onChange={handleOnChange('villa_id')}
                                                    type="text" placeholder="e.g Id" />

                                                <input id="order_created_on" name="order_created_on"
                                                    value={values.order_created_on}
                                                    onChange={handleOnChange('order_created_on')}
                                                    type="text" placeholder="Villa's Name" />

                                                <input id="order_start_date" name="order_start_date"
                                                    value={values.order_start_date}
                                                    onChange={handleOnChange('order_start_date')}
                                                    type="number" placeholder="Price" />

                                                <input id="order_end_date" name="order_end_date"
                                                    value={values.order_end_date}
                                                    onChange={handleOnChange('order_end_date')}
                                                    type="text" placeholder="Description" />

                                                <input id="order_duration" name="order_duration"
                                                    value={values.order_duration}
                                                    onChange={handleOnChange('order_duration')}
                                                    type="text" placeholder="Address" />

                                                <input id="order_price" name="order_price"
                                                    value={values.order_price}
                                                    onChange={handleOnChange('order_price')}
                                                    type="number" placeholder="Bedroom" />

                                                <input id="order_description" name="order_description"
                                                    value={values.order_description}
                                                    onChange={handleOnChange('order_description')}
                                                    type="number" placeholder="Bathroom" />

                                                <input id="order_status" name="order_status"
                                                    value={values.order_status}
                                                    onChange={handleOnChange('order_status')}
                                                    type="text" placeholder="Type" />

                                                <input id="order_user_id" name="order_user_id"
                                                    value={values.order_user_id}
                                                    onChange={handleOnChange('order_user_id')}
                                                    type="number" placeholder="Floor" />

                                                <input id="order_villa_id" name="order_villa_id"
                                                    value={values.order_villa_id}
                                                    onChange={handleOnChange('order_villa_id')}
                                                    type="text" placeholder="Status" />

                                    
                                                <div>
                                                    <select id="user_id" type="text"
                                                        value={values.user}
                                                        onChange={handleOnChange('user_id')}
                                                    >
                                                        <option>Choose User</option>
                                                        {
                                                            users &&
                                                            users.map(data => {
                                                                return (<option value={data.user_id}>{data.user_name}</option>)
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={onSubmit}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => props.setModal()}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
