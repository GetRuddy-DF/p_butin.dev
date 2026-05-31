import { useState, useEffect } from 'react'


const FULL_TEXT = "❯ pavel.init() → loading skills... ✓\n  status: available_for_hire\n  specialty: [frontend, ai_bots, apis]"

export default function Hero()  {
 const [typed, setTyped] = useState('')

 useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
        if (i < FULL_TEXT.length) {
            setTyped(FULL_TEXT.slice(0, i + 1))
            i++
        } else {
            clearInterval(interval)
        }
    }, 35)
    return () => clearInterval(interval)
 }, [])

 const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
 }

    return (
        <section className="hero">
            <div className="hero-tag">
                // full-stack developer & ai builder
            </div>
            <h1 className="hero-name">
                PAVEL <br /><span>BUTIN</span>
            </h1>
            <p className="hero-role">
                Buinder websites & AI-powered bots - available for freelance
            </p>

            <div className="hero-terminal">
                <div className="terminal-bar">
                    <div className='terminal-bot' style={{background: '#ff5f56'}} />
                    <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                    <div className="terminal-dot" style={{ background: '#27c93f' }} />
                </div>
                <div className="terminal-text">
                    {typed.split('\n').map((line, i) => (
                       <div key={i} className={i === 0 ? 'line-green' : 'line-grey'}>
                            {line}
                       </div> 
                    ))}
                    <span className="blink" />
                </div>
            </div>

            <div className="hero-cta">
                <a className="btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); scrollTo('portfolio') }}>
                View Projects
                </a>
                <a className="btn btn-secondary" href="#" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
                Hire Me
                </a>
            </div>
        </section>
    )
}