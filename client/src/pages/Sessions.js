import React, { useEffect, useState, useContext, useRef } from 'react';
import SessionForm from '../components/SessionForm';
import SessionList from './SessionList';
import { AuthContext } from '../context/authContext';

const Session = () => {

    const { user } = useContext(AuthContext);
    const effectRan = useRef(false);
    const [sessions, setSessions] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const addSession = async (newSession) => {
        console.log("Adding new session");
        console.log("Sesh: ", newSession);

        let response = await fetch('/api/practice', {
            method: 'POST',
            body: JSON.stringify(newSession),
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${user.token}`
            }
        }); 

        let json = await response.json();

        // If we get a server ERROR
        if(!response.ok) {
            setError(json.error);
        }
        // reload the "session" state
        fetchSessions();
    }

    const removeSession = async (id) => {
  
        console.log(`ID to be removed ${id}`);
        
        let response = await fetch(`/api/practice/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${user.token}`
            },
        });

        let data = await response.json();

        if(!response.ok) {
            setError(data.error);
        }
        fetchSessions();
    }

    useEffect(() => {
        // Invoke the Method
        console.log("SESSSIONS COMPONENT MOUNTED");
        if(effectRan.current === false) {
            fetchSessions()
        }
        // -- Protected Routes -- //
        // if(user) {
        //     console.log('Found User');
        //     fetchSessions();
        // }
        
        // Clean Up Function
        return () => {
            console.log("SESSIONS COMPONENT UNMOUNTED");
            effectRan.current = true;
        }
    }, []);

    if(loading) {
        return (<div className='loading'> Loading ... </div>);
    }

    return (
        <div className='session-container'>
            <h1>Sessions View</h1>
            <SessionForm addSession={addSession} />
            <SessionList sessions={sessions} removeSession={removeSession}/>
        </div>
    )
}

export default Session;