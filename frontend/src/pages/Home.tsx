import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductsGrid from '../components/Products/ProductsGrid'
import { PlaholderProducts } from '../contants/data'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'

const Home = () => {
  return (
    <div className='border-b border-gray-400'>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        <ProductDetails />

        <div className='container mx-auto px-10'>
            <h2 className='text-3xl text-center font-bold mb-4'>
                Top Wears for Man
            </h2>
            <ProductsGrid data={PlaholderProducts}/>
        </div>

        <FeaturedCollection />

        <FeaturesSection />
    </div>
  )
}

export default Home
