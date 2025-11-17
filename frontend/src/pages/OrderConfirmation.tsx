import { CheckOrder } from "../contants/data"

const OrderConfirmation = () => {

  const caculateEstimatedDelivery = (createdAt: Date) =>{
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
  }


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">Thank you for Your Orders</h1>

        {
          CheckOrder && (
            <div className="p-6 rounded-lg border">
                <div className="flex justify-between mb-5">
                  <div>
                    <h2 className="text-xl font-semibold">Order ID: {CheckOrder.id}</h2>
                    <p className="text-gray-500">Order Date : {new Date(CheckOrder.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div>
                      <p className="text-emerald-700 text-sm">Estimated Delivery: {caculateEstimatedDelivery(CheckOrder.createdAt)}</p>
                  </div>
                </div>

                <div className="mb-20">
                    {
                      CheckOrder.checkoutItems.map((item,index)=>(
                        <div key={index} className="flex items-center mb-4">
                            <img 
                              src={item.image} 
                              alt={item.image} 
                              className="w-16 h-16 object-cover rounded-md mr-4" />

                            <div>
                              <h4 className="text-md font-semibold">{item.name}</h4>
                              <p className="text-sm text-gray-500">{item.color} | {item.size}</p>
                            </div>
                            <div className="ml-auto text-right">
                              <p className="text-md">${item.price}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                            </div>
                        </div>
                      ))
                    }
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Payment</h4>
                      <p className="text-gray-600">Paypal</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                      <p className="text-gray-600">{CheckOrder.shippingAddress.address}</p>
                      <p className="text-gray-600">{CheckOrder.shippingAddress.city}, {CheckOrder.shippingAddress.country}</p>
                    </div>
                </div>
            </div>
          )
        }
    </div>
  )
}

export default OrderConfirmation
