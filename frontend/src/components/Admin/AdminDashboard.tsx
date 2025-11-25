import { Link } from 'react-router-dom'
import { ORDER_LIST } from '../../contants/data'

const AdminDashboard = () => {
  return (
    <div className='h-screen flex flex-col gap-8 bg-gray-50'>
      <h1 className='text-4xl font-bold'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
            <div className='flex flex-col  shadow-lg p-4'>
                <h2 className='text-xl font-bold'>Revenue</h2>
                <p className='font-semibold text-lg'>$ 318.00</p>
                <Link to='/admin/products'></Link>
            </div>
            <div className='flex flex-col  shadow-lg p-4'>
                <h2 className='text-xl font-bold'>Total Order</h2>
                <p className='font-semibold text-lg'>{ORDER_LIST.length}</p>
                <Link to='/admin/products' className='text-blue-500'>Manager Orders</Link>
            </div>
            <div className='flex flex-col  shadow-lg p-4'>
                <h2 className='text-xl font-bold'>Total Products</h2>
                <p className='font-semibold text-lg'>40</p>
                <Link to='/admin/products' className='text-blue-500'>Manager Products</Link>
            </div>
      </div>    

      <div className='flex flex-col '>
            <h2 className='text-2xl font-bold mb-4'>Recent Orders</h2>
            <div className='flex items-start justify-center p-4 bg-gray-300 font-bold' >
                <div className='flex-4'>ORDER ID</div>             
                <div className='flex-2'>USER</div>             
                <div className='flex-2'>TOTAL PRICE</div>             
                <div className='flex-2'>STATUS</div>             
            </div>
            <div className='flex flex-col '>

            {
                ORDER_LIST.map((item,index)=>(
                    <div key={index} className='flex items-center py-4 justify-center border-b border-gray-400  '>
                        <div className='flex-4'>{item.id}</div>             
                        <div className='flex-2 text-gray-700'>{item.user}</div>             
                        <div className='flex-2 text-gray-700'>{item.totalPrice}</div>             
                        <div className='flex-2 text-gray-700'>{item.status}</div>             
                    </div>
                ))
            }
            </div>

      </div>
    </div>
  )
}

export default AdminDashboard
