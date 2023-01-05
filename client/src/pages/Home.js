import { useState, useEffect, useContext } from 'react';
import SessionDetail from '../components/SessionDetail';
import SessionForm from '../components/SessionForm';
import { AuthContext } from '../context/authContext';
import SessionList from '../pages/SessionList';


const Home = () => {

    const [sessions, setSessions] = useState(null);
    const [loading, setLoading] = useState(false);
    // const user = useContext(AuthContext);
    
    useEffect(() => {
        // Define the Method
        const fetchSessions = async () => {
            setLoading(true)
            // query our backend for data
            // const response = await fetch('/api/practice');
            const response = await fetch('/api/practice', {
                // headers: {
                //     'Authorization': `Bearer ${user.token}`
                // }
            });
            // console.log("Response: ", response)
            // parse the response data
            const data = await response.json();
            // Success or Error(?)
            if(response.ok) {
                // update state
                setSessions(data);
                setLoading(false);
            }
        }
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
                <SessionForm />
                <div className="sessions">
                    {sessions && sessions.map((session) => (
                        <SessionDetail key={session._id} session={session} />
                    ))}
                </div>
                <SessionList />
            </div>
        </div>
    )
}


export default Home;