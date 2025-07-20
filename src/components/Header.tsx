import { Link } from '@tanstack/react-router'

import '../styles/header.css'

export default function Header() {
return (
    
        <header>
            <nav>
                
                    <h1 className="logo">bickrs.com</h1>
                    <ul className="nav-links">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/about">About</Link></li>
                        <li><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                
            </nav>
        </header>
    
        
    )
}