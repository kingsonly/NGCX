import React from 'react'
import { Footer, HeaderMenu, Navbar } from './components'

const Layout = ({children}:any) => {
  return (
      <>
        <Navbar />
        <HeaderMenu />
            <main className='font-poppins px-1 md:px-10 py-10'>{children}</main>
        <Footer />
      </>
  )
}

export default Layout