import { useStateValue } from "@/context/StateProvider"
import { useState } from "react";
import TextField from "@mui/material/TextField"
import Box from '@mui/material/Box'
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button'

import { ActionTypes } from "@/context/reducer"

const   Labels = ({setError}) => {
    
const [{barChart}, dispatch] = useStateValue()
const [label, setLabel] = useState("")
const addLabel = () => {
    const labelExists = barChart.labels.filter((labelToMatch) => labelToMatch === label)
    console.log(labelExists)
    if(labelExists.length > 0){
        setError("Label already exists")
    }

    else{
        dispatch({
        type: ActionTypes.SET_LABEL,
        labels: barChart.labels.push(label)
        })

        setError("")
        setLabel("")
    }
    
    }

    const deleteLabel = (labelToDelete) => {
    dispatch({
        type: ActionTypes.DELETE_LABEL,
        labels: barChart.labels.splice(barChart.labels.indexOf(labelToDelete), 1)
    })
    }

  return (
    <div className="w-[80%] flex justify-between items-center flex-col bg-[#F8F8F8] p-4 h-full">
      <div className={`px-3 py-1 ${barChart.labels.length > 0 ? 'justify-start text-lightBlue' : 'justify-center text-myGray-200'} flex items-center flex-col h-[100px] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-100 scrollbar-corner-gray-100 bg-white rounded-lg`} >

      {barChart.labels.length > 0 ? barChart.labels.map((label) => (
        <div className="w-[80%] flex justify-between items-center gap-3 py-2">
        <h3 className="w-[80%] overflow-hidden">{label}</h3>
        <button onClick={deleteLabel} className="text-red-600"><CancelIcon /></button>
        </div>
      )) : (
        <h2 className="text-gray-300">No labels to show here</h2>
      )}

      </div>

      <div className="w-[95%] flex justify-between items-center gap-3">
          <TextField
          required
          id="outlined-required"
          label="Label"
          
          
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addLabel()}
          />
        <button onClick={addLabel} className="text-white p-[4px] text-xs rounded-full bg-blue-600"><DoneIcon sx={{fontSize: 20}} /></button>
      </div>
    </div>
  )
}

export default Labels