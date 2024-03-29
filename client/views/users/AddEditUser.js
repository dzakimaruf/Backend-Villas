
import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentAddIcon } from '@heroicons/react/solid'
import apiUser from './ApiUser'

export default function AddEditUser(props) {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef();

    const [values, setValues] = useState({
        user_id: undefined,
        user_name: undefined,
    });

    // gunakan useEffect 
    useEffect(() => {
        if (props.user.actionType === 'Edit') {
            apiUser.findOne(props.user.user_id).then(data => {
              if(data.error){
                  console.log(data.error)
              } else{

               setValues({ ...values, 
                user_id: data.user_id,
                user_name: data.user_name,
                user_email: data.user_email,
                user_type: data.user_type
             })
            }
            });

        } else {
            setValues({
                ...values,
                user_id: undefined, 
                user_name: undefined,
                user_email: undefined,
                user_type: undefined,
             })
        }
    }, [props.user.actionType])



    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (props.user.actionType === 'Add') {
            const user = {
                user_id: values.user_id || undefined,
                user_name: values.user_name || undefined,
                user_email: values.user_email || undefined,
                user_password: values.user_password || undefined,
                user_type: values.user_type || undefined,
                user_salt: values.user_salt || undefined
            }
            //call api u/ insert row
            apiUser.create(user).then(data => {
                if(data.error){
                    console.log('failed')
                    setValues({...values,error:data.error.message})
                } else{
                    props.setStatus();
                    props.setModal();
                }
            })

        } else if (props.user.actionType === 'Edit') {
            apiUser.update(values).then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
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
                                            {props.title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            {/** code here... */}
                                            <form method="POST" action="#">

                                                <input id="user_id" name="user_id"
                                                    value={values.user_id}
                                                    type="text" placeholder="e.g 1" readOnly />

                                                <input id="user_name" name="user_name"
                                                    type="text" placeholder="username"
                                                    value={values.user_name}
                                                    onChange={handleChange('user_name')}
                                                />

                                                <input id="user_email" name="user_email"
                                                    type="text" placeholder="Email"
                                                    value={values.user_email}
                                                    onChange={handleChange('user_email')}
                                                />

                                                <input id="user_password" name="user_password"
                                                    type="text" placeholder="Pass"
                                                    value={values.user_password}
                                                    onChange={handleChange('user_password')}
                                                />

                                                <input id="user_type" name="user_type"
                                                    type="text" placeholder="type"
                                                    value={values.user_type}
                                                    onChange={handleChange('user_type')}
                                                />

                                                <input id="user_salt" name="user_salt"
                                                    type="text" placeholder="salt"
                                                    value={values.user_salt}
                                                    onChange={handleChange('user_salt')}
                                                />
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
