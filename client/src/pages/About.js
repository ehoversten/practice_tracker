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

    // const containerVariants = {
    //     hidden: {
    //         opacity: 0,
    //         x: '100vw',
    //     },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //         transition: {
    //             type: 'spring',
    //             mass: 0.4,
    //             damping: 8,
    //             when: 'beforeChildren',
    //             staggerChildren: 0.4,
    //         },
    //     },
    //     exit: {
    //         x: '-100vw',
    //         transition: {
    //             ease: 'easeInOut',
    //         },
    //     },
    // };

    if(loading) {
        return (<motion.div 
                    className='about-page'
                    initial={{ x: 0 }}
                    animate={{ x: 200 }}
                    exit={{ x: 0 }}
                    > Loading ... </motion.div>);
    }

    return (
        <motion.div 
            key="about-page"
            // variants={containerVariants}
            // initial="hidden"
            // animate="visible"
            // exit="exit"
            initial={{ x: 0 }}
            // animate={{ x: 200 }}
            exit={{ x: 0 }}
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