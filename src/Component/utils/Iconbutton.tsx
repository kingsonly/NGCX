import React, {FC} from 'react'
import { FiX, FiMenu } from "react-icons/fi"

interface IconbuttonProps {
    isOpen : Boolean,
    onToggle : Function
}

const Iconbutton:FC<IconbuttonProps> = ({isOpen}) => {
  return (
    <button
  >
      {isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
  </button>
  )
}

export default Iconbutton