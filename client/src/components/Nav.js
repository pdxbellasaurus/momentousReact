import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import GlobalContext from '../utils/GlobalState';

function Nav() {
    const {username, id} = useContext(GlobalContext)
    return (
    <nav className="navbar">
        <div className="navbar-brand">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/users/:id">Profile</Link>
        <Link className="navbar-item" to="/new">Create Event</Link>
        <Link className="navbar-item" to="/login">Login</Link>
        <Link className="navbar-item" to="/signup">Signup</Link>
        <p className="navbar-item">Logged in as: {username} </p>
        </div>
    </nav>
    )
}

export default Nav;