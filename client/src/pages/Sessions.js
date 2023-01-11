import React, { useEffect, useState, useContext } from 'react';
import SessionForm from '../components/SessionForm';
import SessionList from './SessionList';
import { AuthContext } from '../context/authContext';

const Session = () => {

    const [sessions, setSessions] = useState(null);
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    // Define the Method
    const fetchSessions = async () => {
        console.log('fetching sessions...')
        console.log("User: ", user);
        setLoading(true)
        try {
            // query our backend for data
            const response = await fetch('/api/practice', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            console.log("Response: ", response)
            // parse the response data
            const data = await response.json();
            // Success or Error(?)
            if(response.ok) {
                // update state
                setSessions(data);
                setLoading(false);
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // Invoke the Method
        fetchSessions()
        // -- Protected Routes -- //
        // if(user) {
        //     console.log('Found User');
        //     fetchSessions();
        // }
    }, []);

    if(loading) {
        return (<div className='loading'> Loading ... </div>);
    }

    return (
        <div className='session-container'>
            <h1>Sessions View</h1>
            <SessionForm setSessions={setSessions}/>
            <SessionList sessions={sessions}/>
        </div>
    )
}

export default Session;