import React, { useState, useEffect } from 'react'
import apiOrder from './ApiOrder'
import PageHeader from '../../components/PageHeader'
import AddEditOrder from './AddEditOrder'
import {PencilAltIcon, TrashIcon} from '@heroicons/react/solid'


export default function Order() {

    const [orders, setOrders] = useState([]);
    const [modal,setModal] = useState(false);
    const [status,setStatus] = useState(false);

    const[order,setOrder] = useState({
        order_id : undefined,
        actionType : undefined
    })

    useEffect(() => {
        apiOrder.list().then(data => {
            setOrders(data)
        }).catch(err => {
            console.log(err)
        });

    }, []); 

    useEffect(() => {
        apiOrder.list().then(data => {
            setOrders(data)
            
        }).catch(err => {
            console.log(err)
        });

        setStatus(false)

    }, [status]); 

    const onCreate=async(id)=>{
        setOrder({
            order_id : id,
            actionType : 'Add'
        });
        setModal(true);
    }

    const onEdit=async(id)=>{
        setOrder({
            order_id : id,
            actionType : 'Edit'
        });
        setModal(true);
    }

    const onDelete = async (id)=>{
        apiOrder.remove(id).then(()=>{
            setStatus(true)
        });
    }
   

   


    return (
        <div>
            <PageHeader title={'Orders'} setModal={()=>onCreate()}/>


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
                                            Order Id
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Order Created On
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Order Start 
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Order End
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Duration
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Description
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            User Id
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Villa Id
                                        </th>


                                        <th
                                            className="px-6 py-3 col-span-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {villas &&
                                    villas.map((data) => (
                                        <tr key={data.villa_id}>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_id}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_created_on}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_start_date}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_end_date}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_duration}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_price}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_description}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_status}</div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.order_user_id}</div>
                                            </td>
                                            

                                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                                                    <span className="hidden sm:block mr-2">
                                                        <button
                                                            onClick={()=>{
                                                                onEdit(data.order_id)
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
                                                                onDelete(data.order_id)
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

        { modal ? <AddEditOrder 
            title={'Order'} 
            setModal={()=>setModal(false)}
            setStatus={()=>setStatus(true)}  
            order={order}
        /> : null} 

        </div>
    )
}
