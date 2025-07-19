import '../styles/header.css'

export default function Header() {
return (
    
        <header>
            <nav>
                
                    <h1 className="logo">bickrs.com</h1>
                    <ul className="nav-links">
                        <li><a className="nav-link" href="/">Home</a></li>
                        <li><a className="nav-link" href="/about">About</a></li>
                        <li><a className="nav-link" href="/projects">Projects</a></li>
                        <li><a className="nav-link" href="/contact">Contact</a></li>
                    </ul>
                
            </nav>
        </header>
    
        
    )
}