import { useState } from 'react';


const SessionDetail = ({ session }) => {
    // console.log(props);
    // destructure 'props' in the function definition
    // let { session } = props;

    return (
        <div className="session-detail">
            <h3>{session.title}</h3>
            <h3>{session.duration}</h3>
            <h3>{session.worked_on}</h3>
        </div>
    )
}

export default SessionDetail;