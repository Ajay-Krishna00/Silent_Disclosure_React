import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <h1>
            Silent Disclosure 
            </h1>
            <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/add" >Add Disclosure</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar