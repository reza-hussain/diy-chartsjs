import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useStateValue } from "@/context/StateProvider"
import { ActionTypes } from "@/context/reducer"
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';


const BarConfig = ({setPreview, preview}) => {
  const [{barChart}, dispatch] = useStateValue()
  const [label, setLabel] = useState("")
  const [error, setError] = useState("")

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
  const handleGenerate = () => {
    
  }

  
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 border border-black">
      <h2>Configurations</h2>

      {error !== "" && (
        <div className="w-[90%] bg-red-200 text-red-600 p-4 rounded-md">
          <p>{error}</p>
        </div>
      )}

      {barChart.labels !== [] && barChart.labels.map((label) => (
        <div className="w-[80%] flex justify-between items-center gap-3 border border-red-300 py-2">
          <h3>{label}</h3>
          <Button onClick={() => deleteLabel(label)}><DeleteIcon /></Button>
        </div>
      ))}

      <Box sx={{width: "80%", display: "flex", gap:2}}>
        <TextField placeholder="Label" data-lpignore
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addLabel()}
        />
        <Button onClick={addLabel}><DoneIcon /></Button>
      </Box>

      <Button onClick={handleGenerate}>Generate</Button>
    </div>

    
  )
}

export default BarConfig