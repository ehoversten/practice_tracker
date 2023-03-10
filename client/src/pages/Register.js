import React, { useState, useContext } from "react";
import { useSignup } from '../hooks/useSignup';
import { AuthContext } from '../context/authContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { user, setUser } = useContext(AuthContext);

    // const { signup, error, isLoading } = useSignup();

    const handleChange = (evt) => {
        console.log(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const newUser = {username, email, password} 
        console.log("New User - ", newUser);

        // Make request to server
        // await signup(username, email, password);

        // Make request to server
        let response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Convert Response Data to JSON
        let json = await response.json();
        console.log("JSON - ", json);

        if(!response.ok) {
            setError(json.error);
        }

        if(response.ok) {
            // save user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            // update Auth Context
            setUser(json);
            // dispatch event
            // dispatchEvent({type: 'LOGIN', payload: json})
            // update loading state
            // setIsLoading(false);

            console.log("User Authorized");
            // reset form state
            setUsername('');
            setEmail('');
            setPassword('');
            setError(null)
        }
    }

    if(user) return <Navigate to="/sessions" />

    return (
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
            exit={{ x: window.innerWidth, transition:{ duration: 0.5 }, ease: 'easeOut'  }}
            className="register-container"
        >
            <h1>Welcome, Register</h1>
            <div className="form-container">
                <form action="">
                    <label htmlFor="username">Enter Username</label>
                    <input type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(evt) => setUsername(evt.target.value)}
                    />
                    <label htmlFor="email">Enter Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                    <label htmlFor="pass">Enter Password</label>
                    <input type="password"
                        id="pass"
                        name="password"
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                    {error && <div className="error">{error}</div>}
                </form>

            </div>
        </motion.div>
    )
}

export default Register;