import { GasCylinder } from 'assets'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiEye, FiHeart, FiShuffle } from 'react-icons/fi'
import { Colors } from 'theme/colors'

const Popular = () => {
  return (
    <div className='bg-white hover:border-ncgx-green border border-gray-200 hover:shadow-lg pt-5 rounded-lg'>
      <div className='flex justify-start'>
        <div className='bg-ncgx-green rounded-r-full text-white text-xs p-2'>-17%</div>
      </div>
        <div className='p-7'>
            <div className='relative'>
              <img src={GasCylinder} alt="gas cylinder" className='w-64' />
              <div className='h-full w-full flex justify-center items-center absolute top-0 left-0'>
                <ul className='bg-white border-2 border-ncgx-light-green rounded-lg flex'>
                  <li className=' p-2'>
                    <FiHeart color={Colors['ncgx-green']} size={24} />
                  </li>
                  <li className=' p-2 border-x-2 border-x-ncgx-light-green'>
                    <FiShuffle color={Colors['ncgx-green']} size={24} />
                  </li>
                  <li className=' p-2'>
                    <FiEye color={Colors['ncgx-green']} size={24} />
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-5' >
              <div className='mb-5'>
                <p className='text-sm text-ncgx-text-lightgray'>Company</p>
                <p className='font-bold text-sm text-ncgx-text-gray'>LPG</p>
              </div>

              <div className='mb-5'>
                <div className='flex items-center'>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color='#ccc'/>

                  <span className='ml-4 text-ncgx-text-lightgray' >(4.0)</span>
                </div>
                <p className='text-ncgx-text-lightgray'>5kg</p>
              </div>

              <div className='flex w-full justify-between items-center'>
                <div className='flex items-baseline'>
                  <p className='font-bold text-2xl text-ncgx-green'>&#8358;2.51</p>
                  <p className='text-xs text-ncgx-text-lightgray'>&#8358;2.00</p>
                </div>
                <button  data-testid="buy-button" className="text-ncgx-green bg-ncgx-extralight-green rounded-md p-2 px-3"><span className='font-bold'>Buy</span> +</button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Popular