import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="w-full justify-center items-center p-16 h-screen">
        {children}
    </div>
  )
}

export default Layout