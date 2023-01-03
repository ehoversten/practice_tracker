import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';

export const useLogout = () => {
    const { setUser } = useContext(AuthContext);

}