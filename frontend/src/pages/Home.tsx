import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        <ProductDetails />
    </div>
  )
}

export default Home
