import React from 'react'
import { PPGDrums } from "assets"
import { FaStar } from 'react-icons/fa'
import { Colors } from 'theme/colors'

const DayDeal = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src={PPGDrums} alt="pbg drums" className='rounded-xl w-80 h-60 object-cover'/>

      <div className='-mt-32 flex flex-col justify-center'>
        <ul className='flex'>
          <li className='rounded-md p-2 bg-white flex justify-center items-center flex-col mr-3 h-16 w-16'>
            <span className='text-ncgx-green text-2xl mb-0 pb-0 font-medium'>05</span>
            <span className='text-ncgx-text-lightgray text-sm' >Days</span>
          </li>
          <li className='rounded-md p-2 bg-white flex justify-center items-center flex-col mr-3 h-16 w-16'>
            <p className='text-ncgx-green text-2xl mb-0 pb-0 font-medium'>05</p>
            <span className='text-ncgx-text-lightgray text-sm' >Hours</span>
          </li>
          <li className='rounded-md p-2 bg-white flex justify-center items-center flex-col mr-3 h-16 w-16'>
            <p className='text-ncgx-green text-2xl mb-0 pb-0 font-medium'>05</p>
            <span className='text-ncgx-text-lightgray text-sm' >Mins</span>
          </li>
          <li className='rounded-md p-2 bg-white flex justify-center items-center flex-col h-16 w-16'>
            <p className='text-ncgx-green text-2xl mb-0 pb-0 font-medium'>05</p>
            <span className='text-ncgx-text-lightgray text-sm' >Sec</span>
          </li>
        </ul>

        <div className='mt-2 bg-white rounded-md p-5 shadow' >
          <p className='font-bold text-sm text-ncgx-text-gray mb-3'>LPG</p>


          <div className='mb-5'>
            <div className='flex items-center'>
              <FaStar color={Colors['ncgx-mustard']}/>
              <FaStar color={Colors['ncgx-mustard']}/>
              <FaStar color={Colors['ncgx-mustard']}/>
              <FaStar color={Colors['ncgx-mustard']}/>
              <FaStar color='#ccc'/>

              <span className='ml-4 text-ncgx-text-lightgray text-xs' >(4.0)</span>
            </div>
            <p className='text-ncgx-text-lightgray text-xs mt-1'>5kg</p>
          </div>

          <div className='flex w-full justify-between items-center'>
            <div className='flex items-baseline'>
              <p className='font-bold text-xl text-ncgx-green'>&#8358;2.51</p>
              <p className='text-xs text-ncgx-text-lightgray'>&#8358;2.00</p>
            </div>
            <button className="text-ncgx-green bg-ncgx-extralight-green rounded-md p-1 px-4"><span className='font-bold'>Buy</span> +</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DayDeal