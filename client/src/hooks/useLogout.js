import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogout = () => {
    const { setUser } = useContext(AuthContext);
    // const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user');
        console.log('user removed from localStorage');

        // dispatch logout action
        // dispatch({type: 'LOGOUT'});

        // update user state in context
        setUser(null);
        console.log("User Removed from Context");
    }

    return { logout }
}