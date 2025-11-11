import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { NewArrivals_ITEM } from '../../contants/data'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
  return (
    <section>
      <div className='container mx-auto text-center  relative px-8'>
        <h2 className='text-3xl font-bold mb-4'>
            Explore New Arrivals
        </h2>
        <p className='text-lg text-gray-600 mb-8'>
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe ahead of the trends.
        </p>
      </div>

      <div className='container mx-auto px-8 py-2 overflow-x-scroll flex space-x-6 relative'>
        {
            NewArrivals_ITEM.map((product:any)=>(
                <div key={product.id} className='min-w-[60%] sm:min-w-[40%] lg:min-w-[20%] relative'>
                    <img src={product.image[0].url} alt={product.image[0].altText} className='rounded object-cover '/>
                    <div className='absolute bottom-0 left-0 ring-0 bg-white/8  backdrop-blur-md
                    text-white p-4 rounded-b-lg'>
                        <Link to={`product/${product.id}`} className='block' >
                            <h4 className='font-medium'>{product.name}</h4>
                            <p className='mt-1'>${product.price}</p>
                        </Link>
                    </div>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default NewArrivals
