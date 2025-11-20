import React, { useEffect, useState } from 'react'
import { Order_Item } from '../contants/data'
import { useNavigate } from 'react-router-dom'

const MyOrders = () => {

    const [orders,setOrders] = useState([])
    const navigate = useNavigate()
    console.log(orders)
    useEffect(()=>{
        setOrders(Order_Item)
    },[])
    
    const handleSelectOrder = (id: number | string)=>{
        navigate(`/order/${id}`)
    }


  return (  
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
        <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
            <table className='min-w-full text-left text-gray-500'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                        <th className='py-2 px-4 sm:py-3'>Image</th>
                        <th className='py-2 px-4 sm:py-3'>Order ID</th>
                        <th className='py-2 px-4 sm:py-3'>Created</th>
                        <th className='py-2 px-4 sm:py-3'>Shipping Address</th>
                        <th className='py-2 px-4 sm:py-3'>Items</th>
                        <th className='py-2 px-4 sm:py-3'>Price</th>
                        <th className='py-2 px-4 sm:py-3'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length > 0 ? (
                            orders.map((item,index)=>(
                                <tr onClick={()=>handleSelectOrder(item.id)} key={index} className='border-b hover:border-gray-50 cursor-pointer'>
                                    <td className='py-2 px-2 sm:py-4'>
                                        <img className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg' src={item.orderItems[0].image} alt={item.orderItems[0].name} />
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {item.id}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className='py-2 px-2 sm:px-4 sm:py-4'>
                                        {item.shippingAddress.city} {item.shippingAddress.country}
                                    </td>
                                    <td className='py-2 px-2 sm:px-4 sm:py-4'>
                                        {item.orderItems.length}
                                    </td>
                                    <td className='py-2 px-2 sm:px-4 sm:py-4'>    
                                        ${item.totalPrice}
                                    </td>
                                    <td className='py-2 px-2 sm:px-4 sm:py-4'>
                                        <span className={`${item.isPaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {item.isPaid ? 'Paid' : 'Pending'}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ): (
                            <tr>
                                <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>
                                    You have not orders
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyOrders
