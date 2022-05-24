import React,{FC} from 'react'

interface SectionHeadingProps {
    text: string
}

const SectionHeading:FC<SectionHeadingProps> = ({text}) => {
  return (
    <div className='text-ncgx-text-gray font-bold text-lg my-10' >{text}</div>
  )
}

export default SectionHeading