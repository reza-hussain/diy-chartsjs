import React, { useEffect } from 'react'
import LineChart from "./ChartPreview/LineChart"
import BarChart from "./ChartPreview/BarChart"
import PieChart from "./ChartPreview/PieChart"

const ChartPreview = ({preview}) => {

  useEffect(() => {
    
  },[preview])
  if(preview.type === "Bar"){
    return(
      <div className="w-full flex justify-center items-center h-full">
        <BarChart preview={preview} />
      </div>
    )
  }

  else if(preview.type === "Line"){
    return(
      <div className="w-full flex justify-center items-center h-full">
        <LineChart preview={preview} />
      </div>
    )
  }

  else if(preview.type === "Pie"){
    return(
      <div className="w-full flex justify-center items-center h-full">
        <PieChart preview={preview} />
      </div>
    )
  }
}

export default ChartPreview