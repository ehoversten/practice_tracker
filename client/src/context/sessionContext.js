import { createContext, useState } from "react";


export const SessionContext = createContext();

export const SessionContextProvider = ({children}) => {

    const currentSession = {
        title: '',
        duration: '',
        worked_on: ''
    }

    const [session, setSession] = useState(currentSession);

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    )
}