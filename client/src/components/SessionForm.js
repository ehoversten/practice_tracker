import { useState } from 'react';

const SessionForm = (props) => {
    // --> look into using Ref's for form input values
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [workedOn, setWorkedOn] = useState('');
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        duration: '',
        workedOn: '',
    })

    const handleChange = (evt) => {
        setFormData(prevState => ({
            ...prevState, 
            [evt.target.name]: evt.target.value
        }))
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log("submitted...");

        const newSession = { 
            title,
            duration, 
            worked_on: workedOn 
        }
        console.log(newSession);

        props.addSession(newSession);
  
        setTitle('');
        setDuration('');
        setWorkedOn('');
        setError(null);
    }

    return (
        <div className="session-form">
            <h2>Add Session</h2>
            <div className="form-container">
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
                    <button onClick={() => props.setShowForm(false)} className="cancel-btn">Cancel</button>
                </form>
            </div>
            <div className="error-container">
                {error && <div className='error'>{error}</div>}
            </div>
            
        </div>
    )
}

export default SessionForm;