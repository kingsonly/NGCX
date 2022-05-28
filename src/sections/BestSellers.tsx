import { SectionHeading, BestSellerCard } from 'Component'
import React from 'react'

const BestSellers = () => {
  return (
    <div>
        <SectionHeading text='Best Sellers' />
        <div className='flex'>
            <BestSellerCard />
        </div>
    </div>
  )
}

export default BestSellers