import { useState, useEffect, useContext } from 'react';
import SessionDetail from '../components/SessionDetail';
import SessionForm from '../components/SessionForm';
import { AuthContext } from '../context/authContext';
import SessionList from '../pages/SessionList';
const axios = require('axios');

const Home = () => {

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
        return (<div className='home-page'> Loading ... </div>);
    }

    return (
        <div className='home-page'>
            <h1>Home Component</h1>
            <div>
                <SessionForm me={user}/>
                <SessionList me={user}/>
            </div>
        </div>
    )
}


export default Home;