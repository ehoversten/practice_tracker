import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (evt) => {
        console.log(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const newUser = {email, password} 
        console.log(newUser);

        // Make request to server
        let response = await fetch('/login', {
            method: 'POST',
            body: JOSN.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Convert Response Data to JSON
        let json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }

        console.log("User Authorized")
        setEmail('');
        setPassword('');
        setError(null)
    }

    return (
        <div className="login-container">
            <h1>Welcome, Login</h1>
            <form action="">
                <label htmlFor="email">Enter Email</label>
                <input type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                />
                <label htmlFor="pass">Enter Password</label>
                <input type="text"
                    id="pass"
                    name="pass"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login;