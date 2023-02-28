import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-myGray scrollbar-thin scrollbar-thumb-black">
        {children}
    </div>
  )
}

export default Layout