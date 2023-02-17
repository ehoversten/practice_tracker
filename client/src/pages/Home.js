import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

const Home = () => {

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, []);

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw',
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 8,
                when: 'beforeChildren',
                staggerChildren: 0.4,
            },
        },
        exit: {
            x: '-100vw',
            transition: {
                ease: 'easeInOut',
            },
        },
    };

    return (
        <motion.div
            key="home-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='home-page'
        >
            <h1>Home Component</h1>
            <div>
    
            </div>

        </motion.div>
    )
}


export default Home;