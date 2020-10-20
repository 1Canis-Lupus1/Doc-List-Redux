import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className = "logo">
                <img src="https://askvaidya.in/wp-content/uploads/2020/08/ask-vaidya-logo.png" height="60px"/>
                <ul className = "link">
                    <Link to = "/docDisplay">
                        <li className = "docDisplay"><strong><u>Display Doctor List</u></strong></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;