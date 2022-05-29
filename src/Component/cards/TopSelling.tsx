import { NGCylinder } from 'assets'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Colors } from 'theme/colors'

const TopSelling = () => {
  return (
    <div className='flex h-max mb-5'>
        <img src={NGCylinder} className="rounded-md h-24 w-24 object-cover" />

        <div className='flex flex-col justify-between  h-full ml-5'>
            <p className='font-bold text-sm text-ncgx-text-gray mb-3'>LPG</p>
            <div className='flex items-center mb-5'>
              <FaStar size={10} color={Colors['ncgx-mustard']}/>
              <FaStar size={10} color={Colors['ncgx-mustard']}/>
              <FaStar size={10} color={Colors['ncgx-mustard']}/>
              <FaStar size={10} color={Colors['ncgx-mustard']}/>
              <FaStar size={10} color='#ccc'/>

              <span className='ml-4 text-ncgx-text-lightgray text-xs' >(4.0)</span>
            </div>
            <div className='flex items-baseline'>
              <p className='font-bold text-xl text-ncgx-green'>&#8358;2.51</p>
              <p className='text-xs text-ncgx-text-lightgray'>&#8358;2.00</p>
            </div>
        </div>
    </div>
  )
}

export default TopSelling