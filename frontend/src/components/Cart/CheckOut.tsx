import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PaypalButton from "./PaypalButton"

const CheckOut = () => {
    const navigate = useNavigate()
    const [checkoutId,setCheckoutId] = useState(null)
    const [shippingAddress,setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city : '',
        postalCode: '',
        country: '',
        phone : ''
    })

    const handleCreateCheckOut = (e:any) =>{
        e.preventDefault()

    }

    const handleSuccess = (value: any)=>{
        console.log("Payment Success" ,value)
        navigate("/order-confirmation")
    }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckOut}>
            <h3 className="text-lg mb-4">Contact Details</h3>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input 
                    type="email"
                    value="Huy@gmail.com"
                    className="w-full p-2 border rounded"
                    disabled 
                />
            </div>
            <h3 className="text-lg mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">First Name</label>
                    <input 
                        type="text"
                        value={shippingAddress.firstName}
                        onChange={(e:any)=>setShippingAddress({...shippingAddress,firstName: e.target.value})}
                        className="w-full p-2 border rounded"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input 
                        type="text"
                        value={shippingAddress.lastName}
                        onChange={(e:any)=>setShippingAddress({...shippingAddress,lastName: e.target.value})}
                        className="w-full p-2 border rounded"
                        required 
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input 
                    type="text"
                    value={shippingAddress.address}
                    onChange={(e:any)=>setShippingAddress({...shippingAddress,address: e.target.value})}
                    className="w-full p-2 border rounded"
                    required 
                />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">City</label>
                    <input 
                        type="text"
                        value={shippingAddress.city}
                        onChange={(e:any)=>setShippingAddress({...shippingAddress,city: e.target.value})}
                        className="w-full p-2 border rounded"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Postal Code</label>
                    <input 
                        type="text"
                        value={shippingAddress.postalCode}
                        onChange={(e:any)=>setShippingAddress({...shippingAddress,postalCode: e.target.value})}
                        className="w-full p-2 border rounded"
                        required 
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input 
                    type="text"
                    value={shippingAddress.country}
                    onChange={(e:any)=>setShippingAddress({...shippingAddress,country: e.target.value})}
                    className="w-full p-2 border rounded"
                    required 
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input 
                    type="tel"
                    value={shippingAddress.phone}
                    onChange={(e:any)=>setShippingAddress({...shippingAddress,phone: e.target.value})}
                    className="w-full p-2 border rounded"
                    required 
                />
            </div>
            <div className="mt-6">
                {
                    !checkoutId ? (
                        <button type="submit" className="w-full bg-black text-white py-3 rounded">Continue to Payment</button>
                    ) : (
                        <div>
                            <h3 className="text-lg mb-4">Pay with Paypal</h3>
                            <PaypalButton 
                                amount={100} 
                                onSuccess={handleSuccess}
                            />
                        </div>
                    )
                }
            </div>
        </form>
      </div>
    </div>
  )
}

export default CheckOut
