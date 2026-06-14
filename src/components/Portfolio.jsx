import { useState } from 'react'
 
const projects = [
  {
    id: 1,
    num: '01',
    title: 'AI Film Finder Bot',
    desc: 'Telegram bot that identifies movies from user descriptions using GPT.',
    stack: ['Python', 'aiogram', 'OpenAI API', 'TMDB API', 'Railway'],
    fullDesc: 'A Telegram bot that finds movies by description using GPT-4o-mini. User describes a movie they half-remember — the bot identifies the title, then fetches a poster, rating, trailer link, and similar recommendations via TMDB API. Supports both Russian and English. Deployed live on Railway.',
    github: 'https://github.com/GetRuddy-DF/aifindmoviebot',
    live: null,
  },
  {
    id: 2,
    num: '02',
    title: 'Developer Portfolio',
    desc: 'This site — hacker aesthetic, terminal UI, built with React.',
    stack: ['React', 'CSS', 'Vite', 'Responsive'],
    fullDesc: 'Personal developer portfolio with a hacker/terminal aesthetic. Features animated hero terminal, project popups, skill cards, and full mobile responsiveness. Built in React with Vite.',
    github: null,
    live: '#',
  },
]

export default function Portfolio() {
    const [ modal, setModal] = useState(null)

    return (
        <section className="section" id='portfolio'>
            <div className="section-header">
                <span className="section-num">// 03</span>
                <h2 className="section-title">PORTFOLIO</h2>
                <div className='section-line' />
            </div>

            <div className="portfolio-grid">
                {projects.map(p => (
                    <div className="project-card" key={p.id} onClick={() => setModal(p)}>
                        <div className="project-num">{p.num}</div>
                        <div className="project-title">{p.title}</div>
                        <div className="project-desc">{p.desc}</div>
                        <div className="project-stack">
                            {p.stack.map(t => (
                                <span className="project-tag" key={t}>{t}</span>
                            ))}
                        </div>
                        <span className="project-link">View details</span>
                    </div>
                ))}
            </div>

                  {modal && (
                    <div className="modal-overlay" onClick={() => setModal(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setModal(null)}>[×]</button>
                        <div className="modal-num">// project_{modal.num}</div>
                        <div className="modal-title">{modal.title}</div>
                        <p className="modal-body">{modal.fullDesc}</p>
                        <div className="modal-stack">
                        {modal.stack.map(t => (
                            <span className="skill-tag" key={t}>{t}</span>
                        ))}
                        </div>
                        <div className="modal-links">
                        {modal.github && (
                            <a className="btn btn-secondary" href={modal.github} target="_blank" rel="noreferrer">
                            GitHub →
                            </a>
                        )}
                        {modal.live && (
                            <a className="btn btn-primary" href={modal.live} target="_blank" rel="noreferrer">
                            Live Demo →
                            </a>
                        )}
                        </div>
                    </div>
                    </div>
                )}
        </section>
    )
}