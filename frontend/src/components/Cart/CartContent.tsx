import React from 'react'
import { CART_ITEMS } from '../../contants/data'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContent = () => {
  return (
    <div>
      {CART_ITEMS.map((item : any, index : number)=>(
        
        <div key={index} className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
                <img src={item.image} alt={item.image} className='w-20 h-20 object-cover mr-4 rounded' />
                <div className='flex flex-col'>
                    <h3>{item.name}</h3>
                    <p className='text-sm text-gray-500'>size : {item.size} | color :{item.color}</p>
                    <div className='flex items-center mt-2 gap-2'>
                        <button className='border  px-2 rounded font-medium cursor-pointer'>-</button>
                        <p className='mx-2'>{item.quantity}</p>
                        <button className='border  px-2 rounded font-medium cursor-pointer'>+</button>
                    </div>
                </div>
            </div>

            <div>
                <p className='font-medium'>$ {item.price.toLocaleString()}</p>
                <button>
                    <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600 cursor-pointer' />
                </button>
            </div>
        </div>

      ))}
    </div>
  )
}

export default CartContent
