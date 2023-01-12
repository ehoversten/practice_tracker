import { useState, useEffect, useContext } from 'react';

const Home = () => {

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, []);

    return (
        <div className='home-page'>
            <h1>Home Component</h1>
            <div>
      
            </div>
        </div>
    )
}


export default Home;