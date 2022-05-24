import React, {useState, FC} from 'react';
import { Iconbutton, Linkbutton, Searchbar } from 'components';
import { FiUser, FiRefreshCw, FiHeart } from "react-icons/fi"
import { Logo } from 'assets';

// import Logo from "assets/Logo.svg"


const NavItems = [
    {
        id:0,
        icon: <FiUser size={20}/>,
        text: 'Account'
    },
    {
        id:1,
        icon: <FiRefreshCw size={20} />,
        text: 'Compare'
    },
    {
        id:2,
        icon: <FiHeart size={20} />,
        text: 'Wishlist'
    }
]

interface NavItemProps {
    icon: JSX.Element,
    text: String
}

const NavItem:FC<NavItemProps> = ({icon,text}) => {
    return(
        <div className='flex items-center ml-3'>
            <span>{icon}</span>
            <p className='text-gray-400 ml-1 text-sm font-poppins'>{text}</p>
        </div>
    )
}


const index = () => {
    // const { isOpen, onToggle } = useDisclosure();
    return (
      <div>
        <div
          className='flex bg-ncgx-white font-poppins text-gray-600  px-10 border-b border-gray-200 items-center justify-between '>
          <div
            className='flex md:hidden flex-1 -ml-2'>
            <Iconbutton isOpen={false} onToggle={() => {}} />
          </div>
          <div className='flex justify-start items-center flex-1'>
            <img src={Logo} alt="logo" className='w-32 h-32' />
  
            <div className='none md:flex ml-10 w-1/2'>
              <Searchbar />
            </div>
          </div>
  
          <div className='flex justify-between flex-row'>
            {NavItems.map((item) => (
                <NavItem key={item.id} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    );
  }





export default index