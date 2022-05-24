import { SectionHeading, TopSellingCard } from 'components'
import React from 'react'

const TopSelling = () => {
  return (
    <main className='flex flex-wrap md:flex-nowrap justify-between'>
        <section>
            <SectionHeading text='Top Selling' />

            <TopSellingCard />
            <TopSellingCard />
            <TopSellingCard />
        </section>
        <section>
            <SectionHeading text='Trending products' />

            <TopSellingCard />
            <TopSellingCard />
            <TopSellingCard />
        </section>
        <section>
            <SectionHeading text='Recently added' />

            <TopSellingCard />
            <TopSellingCard />
            <TopSellingCard />
        </section>
        <section>
            <SectionHeading text='Top Rated' />

            <TopSellingCard />
            <TopSellingCard />
            <TopSellingCard />
        </section>
    </main>
  )
}

export default TopSelling