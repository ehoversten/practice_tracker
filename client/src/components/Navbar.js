import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';


const Navbar = () => {
    const { logout } = useLogout();

    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <nav>
                <h2>Practice Session Tracker</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='register'>Register</NavLink>
                <NavLink to='login'>Login</NavLink>
                <div className="logout-btn">
                    <button onClick={handleClick}>Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;