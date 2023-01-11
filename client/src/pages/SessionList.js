import { useEffect, useState } from 'react';

const SessionList = ({ sessions }) => {

    return (
        <div className="session-list">
            <h1>Practice Session List</h1>
            {sessions && sessions.map((item) => (
                <div key={item.id} className="session-item">
                    <p>{item.title}</p>
                    <p>{item.duration}</p>
                    <p>{item.workedOn}</p>
                </div>
            ))}
        </div>
    )
}

export default SessionList;