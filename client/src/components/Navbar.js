import React from 'react';
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <header>
            <nav>
                <h2>Practice Session Tracker</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
            </nav>
        </header>
    )
}

export default Navbar;