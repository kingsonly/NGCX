import { DealOfTheDayCard } from 'Component'
import { SectionHeading } from 'Component'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const DealForTheDay = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <SectionHeading text='Deal Of The Days' />
            <a href='#' className='flex items-center text-ncgx-text-lightgray'>All Deals  <span> <FiChevronRight /> </span></a>
        </div>
        <main className='flex justify-start'>
            <DealOfTheDayCard />
        </main>
    </div> 
  )
}

export default DealForTheDay

