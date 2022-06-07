import React, {FC} from 'react'
import { FiSearch, FiChevronDown } from "react-icons/fi"
import { DropDownMenu } from '..'


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

export const SearchInput:FC = () => {
    return(
        <div className='flex items-center justify-between w-full'>
            <input placeholder='Search for items' className='outline-none px-2  w-full border-l placeholder:text-xs placeholder:text-gray-300'/>
            <span className='px-4'><FiSearch color="lightgrey" size={20} /></span>
        </div>
    )
}

const index = () => {
  return (
    <div className='border-light-green border-2 rounded-md flex items-center w-full py-2'>
        <DropDownMenu variant='searchDdm' items={items} label={items[0].label} icon={<FiChevronDown size={16}/>} />
        <SearchInput />
    </div>
  )
}



export default index