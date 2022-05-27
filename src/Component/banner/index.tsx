import React, {FC} from 'react'
import { FiSend } from "react-icons/fi"

interface bannerProps {
  title: string,
  text: string,
  img: string
}


const SubscriptionInput = () => {
  return(
    <div className='flex bg-white items-center rounded-full w-2/3 pl-4'>
      <FiSend size={24} color="#7E7E7E" />
      <input placeholder='Your email address' className='placeholder:text-ncgx-text-lightgray placeholder:text-xs text-xs outline-none w-full ml-4' />
      <button className='text-white font-semibold text-sm bg-ncgx-green rounded-full px-5 py-2 outline-none ' >Subscribe</button>
    </div>
  )
}

const index:FC<bannerProps> = ({title, text, img}) => {
  return (
    <div style={{background: `url(${img}) center center/cover no-repeat`}} className="p-1 md:p-16 rounded-xl" >
      
      <div className='w-1/2'>
        <div className='mb-12'>
          <h1 className='text-ncgx-text-gray text-2xl md:text-5xl font-bold mb-5' >{title}</h1>
          <p className='text-ncgx-text-lightgray'>{text} </p>
        </div>

        <SubscriptionInput />
      </div>
    </div>
  )
}

export default index