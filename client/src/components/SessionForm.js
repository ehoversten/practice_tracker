import { useState } from 'react';

const SessionForm = () => {
    // --> look into using Ref's for form input values
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [workedOn, setWorkedOn] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log("submitted...");

        const newSession = { title, duration, worked_on: workedOn }
        console.log(newSession);

        let response = await fetch('/api/practice', {
            method: 'POST',
            body: JSON.stringify(newSession),
            headers: {
                'Content-Type': 'application/json'
            }
        }); 

        let json = await response.json();

        // If we get a server ERROR
        if(!response.ok) {
            setError(json.error);
        }
        console.log("New Session Added");
        // reset form inputs 
        setTitle('');
        setDuration('');
        setWorkedOn('');
        setError(null);
    }

    const handleChange = (evt) => {
        console.log(evt.target.value);

    }

    return (
        <div className="session-form">
            <h2>Add Session</h2>
            <form>
                <label htmlFor="title">Enter Title</label>
                <input id="title" 
                    type="text" 
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)}/>

                <label htmlFor="duration">Enter Duration</label>
                <input id="duration" 
                    type="text" 
                    value={duration} 
                    onChange={(evt) => setDuration(evt.target.value)}/>

                <label htmlFor="worked_on">Enter Topics Worked On</label>
                <input id="worked_on" 
                    type="text" 
                    value={workedOn}  
                    onChange={(evt) => setWorkedOn(evt.target.value)}/>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
            {error && <div className='error'>{error}</div>}
        </div>
    )
}

export default SessionForm;