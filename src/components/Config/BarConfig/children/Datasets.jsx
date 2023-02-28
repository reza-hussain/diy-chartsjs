import { ActionTypes } from "@/context/reducer";
import { useStateValue } from "@/context/StateProvider"
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import CreateDataset from "../modals/CreateDataset";

const Datasets = () => {
  const [{barChart, modalOpen}, dispatch] = useStateValue()

  const addDataset = () => {
    dispatch({
      type: ActionTypes.SET_MODAL_OPEN,
      modalOpen: !modalOpen
    })
  }

  const deleteDataset = (datasetToDelete) => {
    dispatch({
      type: ActionTypes.DELETE_DATASET,
      datasets: barChart.datasets.splice(barChart.datasets.indexOf(datasetToDelete), 1)
    })
  }
  return (
    <div className="w-[95%] flex justify-between items-center gap-5 bg-[#F8F8F8] px-5 py-4">
      {modalOpen && <CreateDataset />}

      <div className="p-2 flex justify-center items-center bg-white rounded-lg"
      onClick={addDataset}
      >
        <button className="flex justify-center items-center bg-[rgba(28,190,245,0.2)] text-blue-400 p-1.5 rounded-full"><AddIcon sx={{fontSize: 25}} /></button>
      </div>

      <div className="bg-white p-6 w-[90%] h-[110px] flex justify-start items-center gap-3 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200">
        {barChart.datasets.length > 0 ? barChart.datasets.map((set, key) => (

          <div key={key} className={`p-2 w-12 h-12 hover:w-10 hover:h-10 transition-all duration-200 ease-in-out flex justify-center items-center bg-[#${set.color}] ${set.shape === 'circle' ? 'rounded-full' : 'rounded-lg'}`}
          onClick={deleteDataset}
          >
            <button className="flex justify-center items-center bg-[rgba(255,255,255,0.2)] text-white p-1.5 rounded-full"><CancelIcon sx={{fontSize: 25}} /></button>
          </div>

        
        )):(

          <div className="p-2 flex justify-center items-center bg-white rounded-lg">
          <p className="text-blue-300">No datasets</p>
        </div>
        ) }

        
      </div>
     
    </div>
  )
}

export default Datasets