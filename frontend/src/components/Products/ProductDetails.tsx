import { useState } from 'react'
import { SelectedProduct, SimilarProducts } from '../../contants/data'
import { toast } from 'sonner'
import ProductsGrid from './ProductsGrid'

const ProductDetails = () => {

    const [valueForm,setValueForm] = useState({
        id: SelectedProduct.id,
        name: SelectedProduct.name,
        size: '',
        price: SelectedProduct.price,
        quatity: 1,
        color: '',
    })

    const [imageShow, setImageShow] = useState<string>(SelectedProduct.images?.[0]?.url || '')

    const handleChangeImageShow = (url: string) => {
        setImageShow(url)
    }

    const handleAddToCart = ()=>{
        if(!valueForm.size || !valueForm.color){
            toast("Choose your Size and Color")
        }else{
            console.log(valueForm)
            toast("Add to cart Success")

        }
    }
    

    
  return (
    <div className='mt-10'>
        <h2 className='text-3xl text-center font-bold mb-4'>
            Best Seller
        </h2>
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {SelectedProduct.images?.map((img, index) => (
                            <div
                                key={img.url ?? index}
                                onClick={() => handleChangeImageShow(img.url)}
                            >
                                <img src={img.url} alt={img.altText ?? SelectedProduct.name} className='w-20 h-20 object-cover rounded cursor-pointer'/>
                            </div>
                        ))}
                    </div>
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={imageShow} alt="Main product" className='w-full h-[650px] object-cover rounded-lg' />
                        </div>
                    </div>

                    <div className='md:hidden flex overflow-x-scroll space-x-4 mb-4'>
                        {SelectedProduct.images?.map((img, index) => (
                            <img
                                key={img.url ?? index}
                                src={img.url}
                                alt={img.altText ?? SelectedProduct.name}
                                className='w-20 h-20 object-cover rounded cursor-pointer'
                                onClick={() => handleChangeImageShow(img.url)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleChangeImageShow(img.url) }}
                            />
                        ))}
                    </div>

                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {SelectedProduct.name}
                        </h1>

                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            ${SelectedProduct.price}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {SelectedProduct.description}
                        </p>

                        <div className='mb-4'>
                            <p className='text-gray-700'>
                                Color:
                            </p>
                            <div className='flex gap-2 mt-2'>
                                {SelectedProduct.color.map((item,index)=>(
                                    <button onClick={()=>setValueForm({...valueForm,color:item})} style={{backgroundColor: item.toLocaleLowerCase(), filter: 'brightness(0.5)'}} key={index} className={`${valueForm.color === item ? "ring-4 ring-green-200" : ""} w-8 h-8 rounded-full border-none outline-none  cursor-pointer`}>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-700'>Size:</p>
                            <div className='flex gap-2 mt-2'>
                                {SelectedProduct.size.map((item,index)=>(
                                    <button onClick={()=>setValueForm({...valueForm,size:item})} key={index} className={`${valueForm.size === item ? 'bg-black text-white' : ''} cursor-pointer px-4 py-2 rounded border`}>
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity:
                            </p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button disabled={valueForm.quatity<=1} onClick={()=>setValueForm({...valueForm,quatity: valueForm.quatity-1})} className={`${valueForm.quatity <= 1 ? "cursor-not-allowed opacity-40 " : "cursor-pointer"}  px-4 py-1 bg-gray-200 rounded text-lg`}>
                                    -
                                </button>
                                <span className='text-lg'>
                                    {valueForm.quatity}         
                                </span>
                                <button onClick={()=>setValueForm({...valueForm,quatity: valueForm.quatity+1})} className='cursor-pointer px-4 py-1 bg-gray-200 rounded text-lg'>
                                    +
                                </button>
                            </div>
                        </div>

                        <button onClick={handleAddToCart} className='cursor-pointer bg-black text-white py-2 px-6 rounded w-full mb-4'>
                                ADD TO CART
                        </button>

                        <div className=' mt-10 text-gray-700'>
                            <h3 className='text-xl font-bold mb-4'>Characteristics:</h3>
                            <table className='w-full text-left text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <th className='pr-4 font-medium'>Brand</th>
                                        <td>{SelectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <th className='pr-4 font-medium'>Material</th>
                                        <td>{SelectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <h2 className='text-center text-2xl font-medium mb-4'>
                    You May Also Like
                </h2>
                <ProductsGrid data={SimilarProducts}/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
