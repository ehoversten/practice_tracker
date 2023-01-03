import { useState, useContext } from 'react';
import { useAuthContext } from './useAuthContext';
import { AuthContext } from '../context/authContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {user, setUser} = useContext(AuthContext);
    // const { dispatch } = useAuthContext();

    const login = async (username, email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: { 'Content-Type': 'application/json' }
        })
        // Convert to JS object
        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok) {
            // save user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            // update Auth Context
            setUser(json);
            // dispatch event
            // dispatchEvent({type: 'LOGIN', payload: json})
            // update loading state
            setIsLoading(false);
        }
    }

    return { login, isLoading, error };
}