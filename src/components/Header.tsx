import '../styles/header.css'

export default function Header() {
return (
    
        <header>
            <nav>
                <div className="gradient-background">
                    <h1 className="logo">bickrs.com</h1>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    
        
    )
}