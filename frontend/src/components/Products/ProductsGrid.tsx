import React from 'react'


interface ProductsGridProps{
    data: DataProp[]
}

interface DataProp{
    id: number,
    name: string,
    price: number,
    originalPrice: number,
    description: string,
    brand: string,
    material: string,
    size: string[],
    color: string[],
    images: object[]
}

const ProductsGrid:React.FC<ProductsGridProps> = (data) => {
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default ProductsGrid
