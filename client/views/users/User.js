import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import AddEditUser from './AddEditUser'
import apiUser from './ApiUser'
import {PencilAltIcon, TrashIcon} from '@heroicons/react/solid'


export default function User() {

    const [users, setUsers] = useState([]);
    const [modal,setModal] = useState(false);
    const [status,setStatus] = useState(false);

    const[user,setUser] = useState({
        user_id : undefined,
        actionType : undefined
    })

    useEffect(() => {
        apiUser.list().then(data => {
            setUsers(data)
        }).catch(err => {
            console.log(err)
        });

    }, []); 

    useEffect(() => {
        apiUser.list().then(data => {
            setUsers(data)
            
        }).catch(err => {
            console.log(err)
        });

        setStatus(false)

    }, [status]); 

    const onCreate=async(id)=>{
        setUser({
            user_id : id,
            actionType : 'Add'
        });
        setModal(true);
    }

    const onEdit=async(id)=>{
        setUser({
            user_id : id,
            actionType : 'Edit'
        });
        setModal(true);
    }

    const onDelete = async (id)=>{
        apiUser.remove(id).then(()=>{
            setStatus(true)
        });
    }
   

   


    return (
        <div>
            <PageHeader title={'Users'} setModal={()=>onCreate()} />


            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        
                                    <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Username
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Email
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Birthdate
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Gender
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Profile Picture
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            User Type
                                        </th>

                                        <th
                                            className="px-6 py-3 col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users &&
                                    users.map((data) => (
                                        <tr key={data.user_id}>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_id}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_name}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_email}</div>
                                            </td>
                                            
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_birthdate}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_gender}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_avatar}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.user_type}</div>
                                            </td>
                                            

                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                                                    <span className="hidden sm:block mr-2">
                                                        <button
                                                            onClick={()=>{
                                                                onEdit(data.user_id)
                                                            }}
                                                            type="button"
                                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                        >
                                                            <PencilAltIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                    <span className="hidden sm:block">
                                                        <button
                                                            onClick={()=>{
                                                                if (window.confirm('Delete this record ?'))
                                                                onDelete(data.user_id)
                                                            }}
                                                            type="button"
                                                            className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                                        >
                                                            <TrashIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        { modal ? <AddEditUser 
            title={'User'} 
            setModal={()=>setModal(false)}
            setStatus={()=>setStatus(true)}  
            user={user}
        /> : null} 

        </div>
    )
}
