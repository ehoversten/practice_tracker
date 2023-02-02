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
        <div className='home-page'>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.0, duration: 0.5 }}
                exit={{ x: '-100vw' }}
            >

                <h1>Home Component</h1>
                <div>
        
                </div>

            </motion.div>
        </div>
    )
}


export default Home;