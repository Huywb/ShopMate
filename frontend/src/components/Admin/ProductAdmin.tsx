import React, { useState } from 'react'
import { ADMIN_USERS, PRODUCT_ADMIN } from '../../contants/data'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ProductAdmin = () => {

  const [productsPerPage,setProductsPerPage] = useState(5);
  const [listProductAdmin,setListProductAdmin] = useState(PRODUCT_ADMIN.slice(0,productsPerPage))
  const [currentPage,setCurrentPage] = useState(1);
  const [productInfo,setProductInfo] = useState({
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    sku: '',
    size: [] as string[],
    color: '',
    images: [] as string[],
  })


  let pageCount = Math.ceil(PRODUCT_ADMIN.length / productsPerPage);

  const handleSelectCurrentPage = (pageNumber: number)=>{
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    setListProductAdmin(PRODUCT_ADMIN.slice(startIndex, endIndex));
  }

  const handleChangeProductsPerPage = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setProductsPerPage(+e.target.value);
    setListProductAdmin(PRODUCT_ADMIN.slice(0,+e.target.value))
  }

  const handleSelectedProduct = (productId:number)=>{
    const product = PRODUCT_ADMIN.find(product => product.id === productId)
    if(product){
      setProductInfo({
        id: productId.toString(),
        name: product.name,
        description: product.description,
        price: +product.price,
        stock: product.stock,
        sku: product.sku,
        size: product.size,
        color: product.color,
        images: [...product.images],
      })
  }
  }
  
  const handleDeleteProduct = (productId:number)=>{
    toast("Delete Product " + productId +" Success")
  }
  return (
    <div className='w-full h-screen flex flex-col gap-4'>
      <div className='flex justify-between'>
        <h2 className='font-bold text-2xl'>Product Management</h2>
        <select value={productsPerPage} onChange={handleChangeProductsPerPage} className='border border-gray-400 p-2 rounded-md outline-none'>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div className='flex items-center justify-center'>
        {pageCount > 1 && (
          <div>
              {Array.from({length: pageCount}, (_, index) => (
                    <button onClick={() => handleSelectCurrentPage(index + 1)} key={index} className='cursor-pointer mx-1 px-3 py-1 border rounded-md'>{index + 1}</button>
              ))}
          </div>
        )}                       
      </div>
      <div className='flex flex-col '>
        <div className='flex items-start justify-center p-4 bg-gray-300 font-bold' >
          <div className='flex-4'>NAME</div>             
            <div className='flex-2'>PRICE</div>             
            <div className='flex-3'>SKU</div>             
            <div className='flex-2'>ACTIONS</div>             
        </div>
        <div className='flex flex-col '>
          {
            listProductAdmin.map((item,index)=>(
              <div key={index} className='flex items-center py-4 justify-center border-b border-gray-400  '>
                <div className='flex-4'>{item.name}</div>             
                <div className='flex-2 text-gray-700'>{item.price}</div>             
                <div className='flex-3 text-gray-700'>{item.sku}</div>             
                <div className='flex-2 text-gray-700 flex gap-2'>
                    <button onClick={() => handleSelectedProduct(item.id)} className='min-w-16 p-2 bg-green-500 outline-none rounded-md cursor-pointer hover:bg-green-400 transition duration-300 text-white'>Edit</button>
                    <button onClick={() => handleDeleteProduct(item.id)} className='p-2 bg-red-500 outline-none rounded-md cursor-pointer hover:bg-red-400 transition duration-300 text-white'>Delete</button>
                </div>             
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductAdmin
