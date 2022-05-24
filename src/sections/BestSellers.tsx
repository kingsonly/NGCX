import { SectionHeading, BestSellerCard } from 'components'
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