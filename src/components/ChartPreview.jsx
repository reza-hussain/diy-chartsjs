import React, { useEffect } from 'react'

const ChartPreview = ({preview}) => {

  useEffect(() => {
    
  },[preview])
  return (
    <div
    className={`w-full flex justify-center items-center p-5`}
    style={{backgroundColor: preview.backgroundColor === '' ? '#FFFFFF' : `#${preview.backgroundColor}`}}
    >
      ChartPreview
      
    </div>
  )
}

export default ChartPreview