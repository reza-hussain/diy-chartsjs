import { createContext, useContext, useReducer } from "react";          

export const StateContext = createContext();


export const StateProvider = ({reducer, configState, children}) => (
    <StateContext.Provider value={useReducer(reducer, configState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);

