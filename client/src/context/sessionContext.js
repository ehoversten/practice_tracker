import { createContext, useState } from "react";


export const SessionContext = createContext();



export const SessionContextProvider = ({children}) => {

    const currentUser = {
        username: '',
        email: '',
        // password: ''
    }

    const [user, setUser] = useState({});

    return (
        <SessionContext.Provider value={user}>
            {children}
        </SessionContext.Provider>
    )
}