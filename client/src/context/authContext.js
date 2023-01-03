import { createContext, useState, useReducer } from 'react';

export const AuthContext = createContext();
// export const AuthContext = createContext({
//     user: null,
//     setUser: () => null
// });

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return { user: action.payload }
        case 'LOGOUT': 
            return { user: null }
        default: 
            return state;
    }
}

export const AuthContextProvider = ({children}) => {

    const currentUser = {
        username: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(currentUser);

    // const [state, dispatch] = useReducer(authReducer, {
    //     user: null
    // })
    // console.log('Auth Context State: ', state);

    return (
        <AuthContext.Provider value={{user, setUser}}>
        {/* <AuthContext.Provider value={{...state, dispatch}}> */}
            {children}
        </AuthContext.Provider>
    )
}