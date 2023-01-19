import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const navigate = useNavigate();
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
        // navigate("/");
    }

    return { logout }
}