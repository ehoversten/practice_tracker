import { createContext } from "react";


export const SessionContext = createContext();



export const SessionContextProvider = ({children}) => {
    return (
        <SessionContext.Provider value={'Bingo'}>
            {children}
        </SessionContext.Provider>
    )
}