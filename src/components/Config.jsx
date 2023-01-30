import React, { useEffect } from 'react'
import FormControl from "@mui/material/FormControl"
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from "@mui/material/TextField"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Config = ({setPreview, preview}) => {

  const handleGenerate = () => {
    console.log(preview)
  }

  
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <h2>Configurations</h2>
      
      <FormControl fullWidth>
        <InputLabel id="test-select-label">Type</InputLabel>
        <Select defaultValue="Bar"
        onChange={(e) => setPreview({type: e.target.value, backgroundColor: preview.backgroundColor})}
        labelId="test-select-label" label="Age">
          <MenuItem value="Bar">Bar</MenuItem>
          <MenuItem value="Line">Line</MenuItem>
          <MenuItem value="Pie">Pie</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{width: "100%"}}>
        <InputLabel id="test-select-label">Background</InputLabel>
        <TextField fullWidth onChange={(e) => setPreview({type: preview.type, backgroundColor: e.target.value})}/>
      </Box>

      <Button onClick={handleGenerate}>Generate</Button>
    </div>

    
  )
}

export default Config