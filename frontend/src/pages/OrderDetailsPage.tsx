import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mockOrderDetails } from "../contants/data"
import { FcPrevious } from "react-icons/fc"

const OrderDetailsPage = () => {
    const {id} = useParams()
    const [orderDetail,setOrderDetail] = useState(mockOrderDetails)
    console.log(orderDetail)

    useEffect(()=>{
        setOrderDetail(mockOrderDetails)
    },[id])
  return (
    <div className="max-w-7xl mx-auto px-15 ">
        <h2 className="text-2xl font-bold  py-5">Order Details</h2>
        <div className="border border-gray-200 shadow-lg flex flex-col p-5 gap-5 rounded-lg ">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">Order ID {orderDetail.id}</h2>
                    <span className={`${orderDetail.isPaid ? "bg-green-200 text-emerald-700": ''} font-semibold  p-2 rounded-lg`}>{orderDetail.isPaid ? "Approved" : "Waiting"}</span>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500 font-semibold">{new Date(orderDetail.createdAt).toLocaleDateString()}</p>
                    <span 
                        className={`${orderDetail.shippingMethod !== 'Delivered' ? 'bg-amber-200 text-yellow-400' : "bg-green-200 text-emerald-700" } p-2 font-semibold rounded-lg`}>{orderDetail.shippingMethod}</span>
                </div>
            </div>
            
            <div className="flex gap-20">
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Payment Info</h3>
                    <div className="flex flex-col ">
                        <span className="text-gray-500">Payment Method : {orderDetail.paymenMethod}</span>
                        <span className="text-gray-500">Status : {orderDetail.isPaid ? "Paid" : "Pending"}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Shipping Info</h3>
                    <div className="flex flex-col ">
                        <span className="text-gray-500">Shipping Method : {orderDetail.shippingMethod}</span>
                        <span className="text-gray-500">Address : {orderDetail.shippingAddress.city} {orderDetail.shippingAddress.country}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col ">
                <h3 className="text-lg font-semibold pb-4">Products</h3>
                <div className="flex w-full flex-col ">   
                    <div className="flex text-center bg-gray-400 font-bold py-2 rounded-sm w-full">
                        <h4 className="flex-4 ">Name</h4>
                        <h4 className="flex-1">Unit Price</h4>
                        <h4 className="flex-1">Quantity</h4>
                        <h4 className="flex-1">Total</h4>
                    </div>
                    {
                        orderDetail?.orderItems?.map((item,index)=>(
                            <div key={index} className="flex items-center text-center py-2 w-full border-b border-gray-300">
                                <h4 className="flex-4 flex gap-4 items-center ">
                                    <img src={item.image} alt={item.image} className="object-cover w-20 h-20" />
                                    {item.name}
                                </h4>
                                <h4 className="flex-1">$ {item.price}</h4>
                                <h4 className="flex-1">{item.quantity}</h4>
                                <h4 className="flex-1">$ {item.quantity * item.price}</h4>
                            </div>
                        ))
                    }
                </div>
                <Link to={'/'} className="pt-4 flex items-center gap-2 text-blue-400 hover:text-blue-600 transition duration-300"><FcPrevious/> Back to my order</Link>
            </div>

        </div>

    </div>
  )
}

export default OrderDetailsPage
