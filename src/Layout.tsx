import React from 'react'
import { HeaderMenu, Navbar } from './components'

const Layout = ({children}:any) => {
  return (
      <>
        <Navbar />
        <HeaderMenu />
            <main className='font-poppins px-1 md:px-10 py-10'>{children}</main>
        <div/>
      </>
  )
}

export default Layout