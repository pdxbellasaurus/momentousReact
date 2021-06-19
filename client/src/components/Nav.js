import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
    <nav className="navbar">
        <div className="navbar-brand">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/new">Create Event</Link>
        </div>
    </nav>
    )
}

export default Nav;