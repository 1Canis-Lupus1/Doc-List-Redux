import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className = "logo">
                <a href="https://sameapk.com/ask-vaidya/" target="_blank" rel="noopener noreferrer" ><img src="https://askvaidya.in/wp-content/uploads/2020/08/ask-vaidya-logo.png" height="60px" alt="Ask_Vaidya"/></a>
                <ul className = "link">
                    <Link to = "/docDisplay">
                        <li className = "docDisplay"><strong><u>Fetch Doctor-List</u></strong></li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;