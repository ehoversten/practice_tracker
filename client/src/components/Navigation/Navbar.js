import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { AuthContext } from '../../context/authContext';
import ('./navbar.css');


const Navbar = () => {
    const { logout } = useLogout();
    const { user, setUser } = useContext(AuthContext);

    const handleClick = () => {
        // setUser(null);
        logout();
    }

    return (
        <header>
            <nav>
                <img src="https://via.placeholder.com/50x50" alt="logo" />
                <h1>Practice Session Tracker</h1>
                <div className="nav-links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='sessions'>Sessions</NavLink>
                    { user && (
                        <>
                            <h3>{user.email}</h3>
                            <div className="">
                                <button className="logout-btn" onClick={handleClick}>Logout</button>
                            </div>
                        </>
                    )}
                    {!user && (
                        <>
                            <NavLink to='register'>Register</NavLink>
                            <NavLink to='login'>Login</NavLink>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;