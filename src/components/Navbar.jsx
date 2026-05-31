import { useState } from 'react';


const links = ['skills', 'portfolio', 'contant']

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
        setMenuOpen(false)
    }

    return (
        <>

            <nav className="navbar">
                <div className="navbar-logo">
                    P_BUTIN<span>.dev</span>
                </div>
                <ul className="navbar-links">
                    {links.map(l => (
                        <li key={l}>
                            <a href='#' onClick={(e) => {e.preventDefault(); scrollTo(l) }}>{l}</a>
                        </li>
                    ))}
                </ul>
                <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
                    <span /><span /><span />
                </button>
            </nav>

            {menuOpen && (
                <div className="mobile-menu">
                    {links.map(l => (
                        <a key={l} href='#' onClick={(e) => {e.preventDefault(); scrollTo(l) }}>{l}</a>
                    ))}
                </div>
            )}
        </>
    )
}