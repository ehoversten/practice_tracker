import { useState, useEffect } from 'react';
import SessionDetail from '../components/SessionDetail';
import SessionForm from '../components/SessionForm';
import SessionList from '../pages/SessionList';


const Home = () => {

    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        // Define the Method
        const fetchSessions = async () => {
            // query our backend for data
            const response = await fetch('/api/practice');
            console.log(response)
            // parse the response data
            const data = await response.json();
            // Success or Error(?)
            if(response.ok) {
                // update state
                setSessions(data);
            }
        }
        // Invoke the Method
        fetchSessions()
    }, []);

    return (
        <div className='home-page'>
            <h1>Home Component</h1>
            <SessionForm />
            <div className="sessions">
                {sessions && sessions.map((session) => (
                    <SessionDetail key={session._id} session={session} />
                ))}
            </div>
            <SessionList />
        </div>
    )
}


export default Home;