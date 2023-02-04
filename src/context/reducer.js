export const ActionTypes = {
    SET_LABEL : "SET_LABEL",
    DELETE_LABEL: "DELETE_LABEL"
}

const reducer = (state, action) => {
    switch(action.type){
        case ActionTypes.SET_LABEL:
            return{...state, ...state.barChart, labels: action.labels}
        
        case ActionTypes.DELETE_LABEL:
            return{...state, ...state.barChart, labels: action.labels}
        default:
            return state
    }
}

export default reducer