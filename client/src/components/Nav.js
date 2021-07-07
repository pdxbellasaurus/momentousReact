import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../utils/GlobalState';
import API from '../utils/API';

function Nav() {
    const userData = useContext(GlobalContext)

    function handleLogout() {
        API.logoutUser()
        .then(res => {
            if (!res.data.loggedIn ){
                //can use context now
                userData.onUpdate(res.data)
                window.location.replace(`http://localhost:3000/login`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
    <nav className="navbar">
        <div className="navbar-brand">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/profile">Profile</Link>
        <Link className="navbar-item" to="/new">Create Event</Link>
        <Link className="navbar-item" to="/login">Login</Link>
        <Link className="navbar-item" to="/signup">Signup</Link>
        <button className="navbar-item" onClick={handleLogout}>Logout</button>
        <p className="navbar-item">Logged in as: {userData.username} </p>
        </div>
    </nav>
    )
}

export default Nav;