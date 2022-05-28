import React from 'react'
import { DropDownMenu } from '..'
import { MdOutlineDashboard } from "react-icons/md"
import { FiChevronDown } from "react-icons/fi"


const items = [
    {
        label: "All Categories"
    },
    {
        label: "Second item"
    },
    {
        label: "Third item"
    }
]

const index = () => {
  return (
    <div className='flex font-poppins bg-white text-gray-600 h-16 py-4 px-10 items-center justify-start'>
        <DropDownMenu variant='withBg' items={items} icon={<MdOutlineDashboard/>} label="Browse communities" />
        <a href='#' className='text-sm font-bold ml-7'>
            Home
        </a>
        
        <span className='ml-5'>
        <DropDownMenu variant='noBg' items={items} icon={<FiChevronDown/>} label="Products" />
        </span>
        <a href='#' className='text-sm font-bold ml-5'>
            Retailers
        </a>
    </div>
  )
}

export default index