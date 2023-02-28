import { useState } from "react"
import { useStateValue } from "@/context/StateProvider"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import TextField from "@mui/material/TextField"
import RadioGroup from '@mui/material/RadioGroup'
import Radio from "@mui/material/Radio"
import FormControlLabel from '@mui/material/FormControlLabel'
import { ActionTypes } from "@/context/reducer";

const CreateDataset = () => {
  const [{barChart, modalOpen}, dispatch] = useStateValue()
  const [color, setcolor] = useState("FF5060")
  const [name, setName] = useState("")
  const [shape, setShape] = useState("square")
  const [error, setError] = useState("")

  const addDataset = () => {
    
    if(name === "") {
      setError("Dataset Name cannot be empty")
    }

    else if(barChart.datasets.filter((match) => match === name).length > 0){
      setError("This name already exists")
    }

    else{
      
      let datasetToPush = {
        name: name,
        color: color,
        shape: shape
      }

      dispatch({
        type: ActionTypes.SET_DATASET,
        datasets: barChart.datasets.push(datasetToPush)
      })

      dispatch({
        type: ActionTypes.SET_MODAL_OPEN,
        modalOpen: !modalOpen
      })
    }

    dispatch({
      type: ActionTypes.SET_LABEL,
      modalOpen: !modalOpen
    })
      
  }

  const cancelDataset = () => {
    dispatch({
      type: ActionTypes.SET_MODAL_OPEN,
      modalOpen: false
    })
  }
  

  return (
    <div className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-[rgba(255,255,255,0.3)] backdrop-blur-sm z-50">
        <div className="w-[300px] h-[350px] rounded-xl p-5 bg-[#FAFAFA] text-gray-500 flex flex-col gap-6 justify-center items-start">
          <h1 className="text-xl font-medium">Add Dataset</h1>
          <TextField
          
          required
          id="outlined-required"
          label="Dataset Name"
          error={error !== ""}
          helperText={error === "" ? "" : error}
          
          onChange={(e) => setName(e.target.value)}
          />

          <div className="flex justify-center items-center gap-3 min-h-[50px]">
            <button onClick={() => setcolor("FF5060")} className="bg-[#FF5060] w-[30px] h-[30px] p-3 hover:p-5 transition-all duration-300 ease-in-out rounded-full text-white flex justify-center items-center"><DoneIcon className={`${color === 'FF5060' ? 'block' : 'hidden'}`} /></button>
            <button onClick={() => setcolor("FEC846")} className="bg-[#FEC846] w-[30px] h-[30px] p-3 hover:p-5 transition-all duration-300 ease-in-out rounded-full text-white flex justify-center items-center"><DoneIcon className={`${color === 'FEC846' ? 'block' : 'hidden'}`} /></button>
            <button onClick={() => setcolor("21CC67")} className="bg-[#21CC67] w-[30px] h-[30px] p-3 hover:p-5 transition-all duration-300 ease-in-out rounded-full text-white flex justify-center items-center"><DoneIcon className={`${color === '21CC67' ? 'block' : 'hidden'}`} /></button>
            <button onClick={() => setcolor("1181EA")} className="bg-[#1181EA] w-[30px] h-[30px] p-3 hover:p-5 transition-all duration-300 ease-in-out rounded-full text-white flex justify-center items-center"><DoneIcon className={`${color === '1181EA' ? 'block' : 'hidden'}`} /></button>
          </div>

           <RadioGroup
            row
            aria-labelledby="shape-radio-buttons"
            defaultValue="Square"
            name="radio-buttons-group"
          >
            <FormControlLabel onClick={() => setShape("square")} value="Square" control={<Radio sx={{'& .MuiSvgIcon-root': { fontSize: 16, }}} />} label="Square" />
            <FormControlLabel onClick={() => setShape("circle")} value="Circle" control={<Radio sx={{'& .MuiSvgIcon-root': { fontSize: 16, }}} />} label="Circle" />
          </RadioGroup>

          <div className="w-full flex justify-between items-center">
            <button onClick={cancelDataset} className="text-white-600 bg-red-600 flex text-white justify-center items-center p-1 rounded-full"><CloseIcon /></button>
            <button onClick={addDataset} className="flex justify-center items-center p-1 text-white rounded-full bg-green-600"><DoneIcon /></button>
          </div>
        </div>
      
    </div>  
  )
}

export default CreateDataset