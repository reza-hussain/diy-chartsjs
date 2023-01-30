import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import ChartPreview from "@/components/ChartPreview"
import Config from "@/components/Config"

const chartBuilder = () => {
    const [preview, setPreview] = useState({
        type: "Bar",
        backgroundColor: "ffffff"
    })

  return (
    <div className="w-screen h-screen p-10">
    <Grid container sx={{width: "100%", padding: 0}}>
        <Grid item sx={{width: "70%", border: "1px solid gray", padding: 5}}>
            <ChartPreview preview={preview} />
        </Grid>

        <Grid item sx={{width: "30%", border: "1px solid black", padding: 5}}>
            <Config preview={preview} setPreview={setPreview} />
        </Grid>
    </Grid>
    </div>
  )
}

export default chartBuilder