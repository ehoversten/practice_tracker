import { createContext, useState, useReducer, useEffect } from 'react';

// export const AuthContext = createContext();
export const AuthContext = createContext({
    user: null,
    setUser: () => null
});

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
    // Initialize State Object --> not needed (?)
    const currentUser = {
        username: '',
        email: '',
        password: ''
    }

    const [user, setUser] = useState(null);
    // check if we have a user saved to local storage
    useEffect(() => {
        console.log('Checking Local Storage...');
        const user = JSON.parse(localStorage.getItem('user'));

        console.log('Auth Context State: ', user);
        if(user) {
            setUser(user);
            // dispatch({type: 'LOGIN', payload: currentUser});
        }
    }, []);


    // const [state, dispatch] = useReducer(authReducer, {
    //     user: null
    // })
    // console.log('Auth Context State: ', state);
    console.log('Auth Context State: ', user);

    return (
        <AuthContext.Provider value={{user, setUser}}>
        {/* <AuthContext.Provider value={{...state, dispatch}}> */}
            {children}
        </AuthContext.Provider>
    )
}