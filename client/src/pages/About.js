import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const [test, setTest] = useState(null);
    const [loading, setLoading] = useState(false)

    const getUsers = async () => {
        setLoading(true)
        const users = await fetch('/api/users');
        const json = await users.json();
        console.log(json);
        setTest(json);
        setLoading(false)
    }

    useEffect(() => {
        // getUsers();
    }, []);


    if(loading) {
        return (<div className='about-page'> Loading ... </div>);
    }

    return (
        <motion.div 
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            exit={{ x: '-100vw' }}
            className='about-page'
            >
            <h1>About Component</h1>
            {test && (
                <div>
                    {test.map(user => (<ul key={user._id}>
                            <li>{user.username}</li>
                            <li>{user.email}</li>
                            </ul>))}
                </div>
            )}
        </motion.div>
    )
}


export default About;