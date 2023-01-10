import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { AuthContext } from '../context/authContext';


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
                <h2>Practice Session Tracker</h2>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='sessions'>Sessions</NavLink>
                { user && (
                    <div>
                        <h3>{user.email}</h3>
                        <div className="logout-btn">
                            <button onClick={handleClick}>Logout</button>
                        </div>
                    </div>
                )}
                {!user && (
                    <div>
                        <NavLink to='register'>Register</NavLink>
                        <NavLink to='login'>Login</NavLink>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar;