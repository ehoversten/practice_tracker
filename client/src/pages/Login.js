import React, { useContext, useState } from "react";
import { useLogin } from '../hooks/useLogin';
import { AuthContext } from "../context/authContext";
import { Navigate } from 'react-router-dom';
import { useAuthContext } from "../hooks/useAuthContext";
import { motion } from 'framer-motion';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // const { user, setUser } = useContext(AuthContext);
    const { user, setUser } = useAuthContext();
    // const { login, isLoading, error } = useLogin();

    const handleChange = (evt) => {
        console.log(evt.target.value);
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // await login();

        const newUser = {email, password} 
        console.log("User Data - ", newUser);

        // Make request to server
        let response = await fetch('/login', {
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

            console.log("User Authorized")
            setEmail('');
            setPassword('');
            setError(null)
        }

    }

    if(user) return <Navigate to="/sessions" />

    return (
        <motion.div 
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.0, duration: 0.5 }}
            className="login-container"
        >
            <div className="title-container">
                <h1>Welcome, Login</h1> 
            </div>
            <div className="form-container">
                <form action="">
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

export default Login;