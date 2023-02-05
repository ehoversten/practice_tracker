import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { AuthContext } from '../../context/authContext';
import Timer from '../Timer';
import ('./navbar.css');


const Navbar = () => {
    const { logout } = useLogout();
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        // setUser(null);
        logout();
        navigate("/login");
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
                    <NavLink to='gallery'>Gallery</NavLink>
                    { user && (
                        <>
                            {/* <div className="">
                                <button className="logout-btn" onClick={handleClick}>Logout</button>
                            </div> */}
                            <NavLink to='login' className="logout-btn" onClick={logout}> Logout </NavLink>
                            <div className="user-info">
                                <h4>Welcome {user.email}</h4>
                            </div>
                        </>
                    )}
                    {!user && (
                        <>
                            <NavLink to='register'>Register</NavLink>
                            <NavLink to='login'>Login</NavLink>
                        </>
                    )}
                    <Timer />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;