import { useState } from 'react';
import { useLang } from '../LanguageContext'


const links = ['skills', 'portfolio', 'contant']

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [ lang, toggleLang, t] = useLang()

    const linkKeys = ['skills', 'portfolio', 'contact']

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
                    {linkKeys.map(key => (
                        <li key={key}>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(key) }}>
                                {t.nav[key]}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="navbar-right">
                    <button className="lang-switch" onClick={toggleLang}>
                        {lang === 'en' ? 'RU' : 'EN'}
                    </button>
                </div>
                <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
                    <span /><span /><span />
                </button>
            </nav>

            {menuOpen && (
                <div className="mobile-menu">
                    {linkKeys.map(key => (
                        <a key={key} href='#' onClick={(e) => { e.preventDefault(); scrollTo(key) }}>
                        {t.nav[key]}
                        </a>
                    ))}
                    <button className="lang-switch-mobile" onClick={toggleLang}>
                        {lang === 'en' ? '🌐 Русский' : '🌐 English'}
                    </button>
                </div>
            )}
        </>
    )
}