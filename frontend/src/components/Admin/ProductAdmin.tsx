import React, { useState } from 'react'
import { ADMIN_USERS, PRODUCT_ADMIN, SIZE } from '../../contants/data'
import { toast } from 'sonner'
import { FaImage } from "react-icons/fa6";

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
  console.log(productInfo)


  let pageCount = Math.ceil(PRODUCT_ADMIN.length / productsPerPage);

  const handleDeleteImage = (imageUrl:string)=>{
    setProductInfo({...productInfo, images: productInfo.images.filter(img => img !== imageUrl)})
  }

  const handleChangeProductInfo = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>)=>{
    setProductInfo({...productInfo, [e.target.name]: e.target.value || e.target.files ? [...productInfo.images, ...Array.from(e.target.files).map((file:any) => URL.createObjectURL(file))] : ''})
  }

  const handleToggleSize = (size:string)=>{
    if(productInfo.size.includes(size)){
      setProductInfo({...productInfo, size: productInfo.size.filter(s => s !== size)})
    }else{
      setProductInfo({...productInfo, size: [...productInfo.size, size]})
    }
  }

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
      {
        productInfo.id ? (
          <>
          <div className='flex justify-between items-center'>
            <h3 className='font-bold text-2xl mb-4'>Edit Product </h3>
            <span className='cursor-pointer  p-1 rounded-md hover:bg-amber-50 transition duration-300 px-2 border border-gray-600' onClick={()=>setProductInfo({...productInfo, id: ''})}>X</span>
          </div>
          <div className='flex flex-col px-20'>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>Product Name</label>
                <input type="text" name="name" value={productInfo.name} onChange={handleChangeProductInfo} className='p-2 border border-gray-400 outline-none rounded-md'/>
              </div>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>Description</label>
                <textarea name="description" rows={3} value={productInfo.description} onChange={handleChangeProductInfo} className='p-2 border border-gray-400 outline-none rounded-md'/>
              </div>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>Price</label>
                <input type="text" name="price" value={productInfo.price} onChange={handleChangeProductInfo} className='p-2 border border-gray-400 outline-none rounded-md'/>
              </div>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>Count in Stock</label>
                <input type="number" name="stock" value={productInfo.stock} onChange={handleChangeProductInfo} className='p-2 border border-gray-400 outline-none rounded-md'/>
              </div>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>SKU</label>
                <input type="text" name="sku" value={productInfo.sku} onChange={handleChangeProductInfo} className='p-2 border border-gray-400 outline-none rounded-md'/>
              </div>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>Size (comma-separated)</label>
                <div className='md:w-1/2 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-2 '>
                  {
                    SIZE.map((item,index)=>(
                        <div key={index} onClick={()=>handleToggleSize(item)} className={`${productInfo.size.includes(item) ? 'border-green-800 bg-black text-white' : ''} flex items-center justify-center gap-2 border border-gray-400 p-2`}>
                          <input type="checkbox" className='hidden p-2 border border-gray-400 outline-none rounded-md'/>
                          <label>{item}</label>
                        </div>
                    ))
                  }
                </div>
              </div>
              <div className='flex flex-col w-full mb-4 gap-2'>
                <label className='font-bold text-md'>Color (comma-separated)</label>
                <input type="text" name="color" value={productInfo.color} onChange={handleChangeProductInfo} className='p-2 border border-gray-400 outline-none rounded-md'/>
              </div>
              <div className='flex items-start mb-4 gap-2 flex-col'>
                <div className='flex gap-2 '>
                  <label className='font-bold text-md'>Upload Image</label>
                  <div className=''>
                    <input id='uploadimages' type="file" multiple name="images" onChange={handleChangeProductInfo} className='hidden'/>
                    <label htmlFor="uploadimages" className='cursor-pointer'><FaImage size={24} /></label>
                  </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                  {productInfo.images?.map((item,index)=>(
                    <div key={index} className='relative'>
                      <img key={index} src={item} alt={`product-${index}`} className=' w-full h-24 object-cover'/>
                      <span onClick={()=>handleDeleteImage(item)} className='absolute top-0 right-0 px-1 bg-white'>X</span>
                    </div>
                  ))
                  }
                </div>
              </div>
          </div>
          </>
        ): (
          <>
          
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
          </>
        )
      }
    </div>
  )
}

export default ProductAdmin
