import barChart from "@/pages/chartBuilder/barChart"

export const ActionTypes = {
    SET_LABEL : "SET_LABEL",
    DELETE_LABEL: "DELETE_LABEL",
    SET_DATASET : "SET_DATASET",
    SET_MODAL_OPEN: "SET_MODAL_OPEN",
    DELETE_DATASET: "DELETE_DATASET"
    
}

const reducer = (state, action) => {
    switch(action.type){
        case ActionTypes.SET_MODAL_OPEN:
            return{...state, modalOpen: action.modalOpen}
            
        case ActionTypes.SET_LABEL:
            return{...state, ...state.barChart, labels: action.labels}
        
        case ActionTypes.DELETE_LABEL:
            return{...state, ...state.barChart, labels: action.labels}

        case ActionTypes.SET_DATASET:
            return{...state, ...state.barChart, datasets: action.datasets}

        case ActionTypes.DELETE_DATASET:
            return{...state, ...state.barChart, datasets: action.datasets}
        
        default:
            return state
    }
}

export default reducer