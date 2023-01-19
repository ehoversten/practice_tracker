import { useEffect, useState } from 'react';
import SessionItem from '../components/SessionItem';

const SessionList = ({ sessions, setSession, removeSession }) => {

    return (
        <div className="session-list">
            <div className="session-title">
                <h1>Practice Session List</h1>
            </div>
            {sessions && sessions.map((item) => (
               <SessionItem key={item._id} item={item} setSession={setSession} removeSession={removeSession}/>
            ))}
        </div>
    )
}

export default SessionList;