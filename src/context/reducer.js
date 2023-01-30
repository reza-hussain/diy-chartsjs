const ActionTypes = {
    SET_CONFIG : "SET_CONFIG"
}

const reducer = (state, action) => {
    switch(action){
        case ActionTypes.SET_CONFIG:
            return{...state, configurations: configurations}
        default:
            return state
    }
}