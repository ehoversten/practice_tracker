import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

const Home = () => {

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, []);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.0, duration: 0.5 }}
            exit={{ x: window.innerWidth, transition:{ delay: 0.5 }, ease: 'easeOut' }}
            className='home-page'
        >

            <h1>Home Component</h1>
            <div>
    
            </div>

        </motion.div>
    )
}


export default Home;