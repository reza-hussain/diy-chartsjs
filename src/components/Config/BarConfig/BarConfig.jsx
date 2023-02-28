import React, { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button'
import { useStateValue } from "@/context/StateProvider"
import Labels from "./children/Labels"
import Datasets from "./children/Datasets"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const BarConfig = ({setPreview, preview}) => {
  const [{barChart}, dispatch] = useStateValue()
  const [error, setError] = useState("")
  const [labelMenu, setLabelMenu] = useState(false)
  const [datasetMenu, setDatasetMenu] = useState(false)


  const handleGenerate = () => {
    console.log(labelRef.current)
  }
  
  return (
    <div className="max-w-full flex flex-col justify-center items-center gap-5 text-white">
      <h2 className="text-darkBlue text-2xl font-semibold">Configurations</h2>

      {error !== "" && (
        <div className="w-[90%] bg-red-200 text-red-600 p-4 rounded-md">
          <p>{error}</p>
        </div>
      )}

      
      <div className={`w-full flex flex-col justify-start items-center ${labelMenu ? 'h-72' : 'h-10'} bg-[#F8F8F8] overflow-hidden gap-3 transition-all duration-300`}>
        <div
          onClick={() => setLabelMenu(!labelMenu)}
          className="w-full flex justify-between items-center bg-white text-lightBlue font-medium p-2">
            <h2>Labels</h2>
            <ArrowDropDownIcon />
        </div>

          <Labels setError={setError}/>
      </div>

      <div className={`w-full flex flex-col justify-start items-center overflow-y-hidden ${datasetMenu ? 'h-52' : 'h-10'} bg-[#F8F8F8] gap-3 transition-all duration-300`}>
        <div
          onClick={() => setDatasetMenu(!datasetMenu)}
          className="w-full flex justify-between items-center bg-white text-lightBlue font-medium p-2">
            <h2>Datasets</h2>
            <ArrowDropDownIcon />
        </div>

        <Datasets setError={setError} />
      </div>
        

      <Button onClick={handleGenerate}>Generate</Button>
    </div>

    
  )
}

export default BarConfig