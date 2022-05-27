import React, {FC} from 'react'

interface LinkbuttonProps {
    text: string
}

const Linkbutton: FC<LinkbuttonProps> = ({text}) => {
  return (
    <div>
        <button className='text-sm font-semibold'><a href='#'>{text}</a></button>
    </div>
  )
}

export default Linkbutton