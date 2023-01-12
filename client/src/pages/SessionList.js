import { useEffect, useState } from 'react';
import SessionItem from '../components/SessionItem';

const SessionList = ({ sessions, removeSession }) => {

    return (
        <div className="session-list">
            <h1>Practice Session List</h1>
            {sessions && sessions.map((item) => (
               <SessionItem key={item._id} item={item} removeSession={removeSession}/>
            ))}
        </div>
    )
}

export default SessionList;