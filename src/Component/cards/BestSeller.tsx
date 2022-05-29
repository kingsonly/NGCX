import { PPGDrums } from 'assets'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { Colors } from 'theme/colors'
import { ProgressBar } from '..'

const BestSeller = () => {
  return (
    <div className='bg-white hover:border-green border border-gray-200 hover:shadow-lg pt-5 rounded-lg'>
    <div className='flex justify-start'>
      <div className='bg-tomato rounded-r-full text-white text-xs p-2'>Save 25%</div>
    </div>
      <div className='p-7'>
          <div>
            <img src={PPGDrums} alt="gas cylinder" className='w-64' />
           
          </div>

          <div className='mt-5' >
            <div className='mb-5'>
              <p className='text-sm text-lightgray'>Company</p>
              <p className='font-bold text-sm text-gray'>PPG</p>
            </div>

            <div className='mb-5'>
              <div className='flex items-center'>
                <FaStar color={Colors['ncgx-mustard']}/>
                <FaStar color={Colors['ncgx-mustard']}/>
                <FaStar color={Colors['ncgx-mustard']}/>
                <FaStar color={Colors['ncgx-mustard']}/>
                <FaStar color='#ccc'/>

                <span className='ml-4 text-lightgray' >(4.0)</span>
              </div>
              <p className='text-lightgray'>5kg</p>
            </div>

            <div className='flex w-full justify-between items-center my-5'>
              <div className='flex items-baseline'>
                <p className='font-bold text-2xl text-green'>&#8358;2.51</p>
                <p className='text-xs text-lightgray'>&#8358;2.00</p>
              </div>
            </div>

            <ProgressBar />
            <div className='mt-1'>
                <p className='text-lightgray'>Sold: <span>90/120</span></p>
            </div>

            <div className='mt-7'>
                <button className='flex bg-green hover:bg-mustard text-white w-full justify-center items-center py-3 rounded-md'>
                    <div className='flex items-center justify-center'>
                        <FiShoppingCart size={20} />
                        <span className='flex-1 ml-3 '>Buy Now</span>
                    </div>
                </button>
            </div>
          </div>

      </div>
  </div>
  )
}

export default BestSeller