import { useEffect, useState } from 'react';


const SessionList = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        console.log('fetching data');
        const response = await fetch('https://jsonplaceholder.typicode.com/users/', {
            // method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })

        console.log(response);
        const jsData = await response.json();
        console.log(jsData);
        setSessions(jsData);
    }

    return (
        <div className="session-list">
            <h1>Practice Session List</h1>
            {sessions && sessions.map((user) => (
                <div key={user.id} className="session-item">
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}

export default SessionList;