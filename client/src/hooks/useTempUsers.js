import { useState, useEffect } from 'react';


export const useFetchUsers = (key, initialValue) => {
    // replace useState for users objects
    const [val, setVal] = useState(initialValue);
    
    
    return [val, setVal];
}

export default function useTempUsers(key, initialValue) {
    // replace useState for users objects
    const [val, setVal] = useState(initialValue);

    
    return [val, setVal];
}
