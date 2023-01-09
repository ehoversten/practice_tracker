import { useEffect, useState } from 'react';


const SessionList = ({ me }) => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        console.log('fetching data');
        const response = await fetch('/api/practice/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${me.token}`
            }
        })

        console.log(response);
        const jsData = await response.json();
        console.log(jsData);
        setSessions(jsData);
    }

    return (
        <div className="session-list">
            <h1>Practice Session List</h1>
            {sessions && sessions.map((item) => (
                <div key={item.id} className="session-item">
                    <p>{item.title}</p>
                    <p>{item.duration}</p>
                    <p>{item.workedOn}</p>
                    {/* <p>{item.user}</p> */}
                </div>
            ))}
        </div>
    )
}

export default SessionList;