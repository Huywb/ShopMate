import { useState } from 'react'
import { ORDER_LIST } from '../../contants/data'
import { toast } from 'sonner'

const OrderAdmin = () => {
  
  const [order,setOrder] = useState(ORDER_LIST)

  const handleSelectedOrder = (orderId:string)=>{
    toast("Edit Order " + orderId)
  }

  const handleDeleteOrder = (orderId:string)=>{
    toast("Delete Order " + orderId)
  }

  const handleChangeStatus = (orderId:string, newStatus:string)=>{
    setOrder(order.map(item => item.id === orderId ? {...item, status: newStatus} : item))
    toast("Change Status of Order " + orderId + " to " + newStatus)

  }
  return (
    <div className='h-screen flex flex-col gap-8 bg-gray-50'>
      <h1 className='text-2xl font-bold'>Order Management</h1>
      <div className='flex flex-col '>
          <div className='flex items-start justify-center p-4 bg-gray-300 font-bold' >
                      <div className='flex-4'>ORDER ID</div>             
                      <div className='flex-2'>CUSTOMER</div>             
                      <div className='flex-2'>TOTAL PRICE</div>             
                      <div className='flex-2'>STATUS</div>             
                      <div className='flex-2'>ACTIONS</div>             
                  </div>
                  <div className='flex flex-col '>
      
                  {
                      order.map((item,index)=>(
                          <div key={index} className='flex items-center py-4 justify-center border-b border-gray-400  '>
                              <div className='flex-4'>{item.id}</div>             
                              <div className='flex-2 text-gray-700'>{item.user}</div>             
                              <div className='flex-2 text-gray-700'>{item.totalPrice}</div>             
                              <div className='flex-2 text-gray-700'>
                                <select name="" id="" value={item.status} onChange={(e)=>handleChangeStatus(item.id, e.target.value)}>
                                  {
                                    ['Pending','Processing','Shipped','Delivered','Cancelled'].map((status,index) =>(
                                      <option key={index} value={status}>{status}</option>
                                    ))
                                  }
                                </select>  
                              </div>  
                              <div className='flex-2 text-gray-700 flex gap-2'>
                                <button onClick={() => handleSelectedOrder(item.id)} className='min-w-16 p-2 bg-green-500 outline-none rounded-md cursor-pointer hover:bg-green-400 transition duration-300 text-white'>Edit</button>
                                <button onClick={() => handleDeleteOrder(item.id)} className='p-2 bg-red-500 outline-none rounded-md cursor-pointer hover:bg-red-400 transition duration-300 text-white'>Delete</button>
                            </div>              
                          </div>
                      ))
                  }
                  </div>
      
            </div>
  
    </div>
  )
}

export default OrderAdmin
